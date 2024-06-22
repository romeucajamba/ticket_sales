import { PrismaClient } from "@prisma/client";
import { env } from "../env/index.js";

export const dbConnector = new PrismaClient({
    log: env.NODE_ENV == 'dev' ? ['query'] : [],
})