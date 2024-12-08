// src/controllers/categoriaController.ts
import { Request, Response } from "express";
import { createCategoria, getCategorias } from "../models/categoriaModel";

export const postCategoria = async (req: Request, res: Response) => {
  const { tipo, valorLocacao } = req.body;
  try {
    const categoria = await createCategoria(tipo, valorLocacao);
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar categoria", error });
  }
};

export const getCategoria = async (req: Request, res: Response) => {
  try {
    const categorias = await getCategorias();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar categorias", error });
  }
};
