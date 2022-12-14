import { z } from "zod";
import { router, publicProcedure, protectedProcedure } from "../trpc";

export const eventsRouter = router({
  getAllEvents: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.events.findMany();
  }),
  getEventById: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(({ ctx, input }) => {
      console.log(input);
      return ctx.prisma.events.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
  getRegisteredEvents: protectedProcedure.query(async ({ ctx }) => {
    const registered = await ctx.prisma.registered.findMany({
      where: {
        userId: ctx.session?.user.id,
      },
      include: {
        event: true,
      },
    });
    return registered.map((r) => ({ regId: r.id, ...r.event }));
  }),
  createEvent: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        location: z.string(),
        registrationFee: z.number(),
        banner: z.string(),
        images: z.array(z.string()).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const event = await ctx.prisma.events.create({
        data: {
          ...input,
        },
      });
      const organiser = await ctx.prisma.organiser.create({
        data: {
          user: {
            connect: {
              id: ctx.session?.user.id,
            },
          },
          event: {
            connect: {
              id: event.id,
            },
          },
        },
      });

      return event;
    }),
  getAllEventsByOrganizer: protectedProcedure.query(async ({ ctx }) => {
    console.log(ctx.session.user.id);
    const organiser = await ctx.prisma.organiser.findMany({
      where: {
        userId: ctx.session.user.id,
      },
      include: {
        event: true,
      },
    });
    return organiser.map((o) => o.event);
  }),
  getAllRegisteredUsersByEvent: protectedProcedure
    .input(z.number())
    .query(async ({ ctx, input }) => {
      const registered = await ctx.prisma.registered.findMany({
        where: {
          eventId: input,
        },
        include: {
          user: true,
        },
      });
      return registered.map((r) => r.user);
    }),
});
