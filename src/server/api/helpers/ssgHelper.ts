import { createServerSideHelpers } from "@trpc/react-query/server";

import { prisma } from "~/server/db";
import superjson from "superjson";
import { appRouter } from "../root";

export const generateSSGHelper = () =>
  createServerSideHelpers({
    router: appRouter,
    ctx: { prisma, userId: null },
    transformer: superjson, // optional - adds superjson serialization
  });
