// src/models/veiculoModel.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createVeiculo = async (dados: {
  placa: string;
  chassi: string;
  anoFabricacao: number;
  cor: string;
  status: string;
  marcaId: number;
  modeloId: number;
}) => {
  return await prisma.veiculo.create({
    data: dados,
  });
};

export const getVeiculos = async () => {
  return await prisma.veiculo.findMany();
};
