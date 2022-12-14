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
});
