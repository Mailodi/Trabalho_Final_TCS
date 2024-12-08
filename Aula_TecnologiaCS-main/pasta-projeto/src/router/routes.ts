// src/router/routes.ts
import { Router } from "express";
import * as categoriaController from "../controllers/categoriaController";
import * as marcaController from "../controllers/marcaController";
import * as veiculoController from "../controllers/veiculoController";

const router = Router();

// Rota para a raiz
router.get("/", (req, res) => {
  res.send("Bem-vindo à API de Veículos!");
});

// Rotas de Categoria
router.post("/categoria", categoriaController.postCategoria);
router.get("/categoria", categoriaController.getCategoria);

// Rotas de Marca
router.post("/marca", marcaController.postMarca);
router.get("/marca", marcaController.getMarca);

// Rotas de Veículo
router.post("/veiculo", veiculoController.postVeiculo);
router.get("/veiculo", veiculoController.getVeiculo);

export default router;
