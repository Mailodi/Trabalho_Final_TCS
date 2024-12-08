// src/models/categoriaModel.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createCategoria = async (tipo: string, valorLocacao: number) => {
  return await prisma.categoria.create({
    data: { tipo, valorLocacao },
  });
};

export const getCategorias = async () => {
  return await prisma.categoria.findMany();
};
