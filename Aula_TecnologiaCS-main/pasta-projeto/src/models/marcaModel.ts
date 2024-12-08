// src/models/marcaModel.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createMarca = async (nome: string) => {
  return await prisma.marca.create({
    data: { nome },
  });
};

export const getMarcas = async () => {
  return await prisma.marca.findMany();
};
