import { router } from "../trpc";
import { authRouter } from "./auth";
import { eventsRouter } from "./events";

export const appRouter = router({
  auth: authRouter,
  events: eventsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
