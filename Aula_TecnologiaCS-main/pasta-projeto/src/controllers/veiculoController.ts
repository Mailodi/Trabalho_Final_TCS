// src/controllers/veiculoController.ts
import { Request, Response } from "express";
import { createVeiculo, getVeiculos } from "../models/veiculoModel";

export const postVeiculo = async (req: Request, res: Response) => {
  const { placa, chassi, anoFabricacao, cor, status, marcaId, modeloId } =
    req.body;
  try {
    const veiculo = await createVeiculo({
      placa,
      chassi,
      anoFabricacao,
      cor,
      status,
      marcaId,
      modeloId,
    });
    res.json(veiculo);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar veículo", error });
  }
};

export const getVeiculo = async (req: Request, res: Response) => {
  try {
    const veiculos = await getVeiculos();
    res.json(veiculos);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar veículos", error });
  }
};
