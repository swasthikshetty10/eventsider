import { router, publicProcedure, protectedProcedure } from "../trpc";

export const authRouter = router({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
  getUserData: protectedProcedure.query(async ({ ctx }) => {
    if (!ctx.session) {
      throw new Error("not logged in");
    }
    const userData = await ctx.prisma.user.findUnique({
      where: {
        email: ctx.session.user.email || "",
      },
    });
    return userData;
  }),
});
