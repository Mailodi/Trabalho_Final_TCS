// src/controllers/marcaController.ts
import { Request, Response } from "express";
import { createMarca, getMarcas } from "../models/marcaModel";

export const postMarca = async (req: Request, res: Response) => {
  const { nome } = req.body;
  try {
    const marca = await createMarca(nome);
    res.json(marca);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar marca", error });
  }
};

export const getMarca = async (req: Request, res: Response) => {
  try {
    const marcas = await getMarcas();
    res.json(marcas);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar marcas", error });
  }
};
