import { z } from "zod";
import { router, publicProcedure } from "../trpc";

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
});
