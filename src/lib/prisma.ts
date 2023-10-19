import { PrismaClient } from "@prisma/client";

declare global {
  var cachedPrisma: PrismaClient;
}

// este documento garante que teremos apenas um prisma cliente, que não
// vai precisar toda hora criar uma nova conexão com o banco,
// assim que você atualizar sua aplicação

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export const prismaClient = prisma;
