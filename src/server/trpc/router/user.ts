import { router, publicProcedure, protectedProcedure } from "../trpc";

export const authRouter = router({
  getUser: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
});
