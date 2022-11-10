const { Router } = require("express");
const NivelController = require("../controllers/NivelController");

const router = Router();

router
  .get("/niveis", NivelController.buscarTodosNiveis)
  .get("/nivel/:id", NivelController.buscarNivel)
  .post("/novoNivel", NivelController.criarNivel)
  .put("/atualizaNivel/:id", NivelController.atualizarNivel)
  .delete("/deletaNivel/:id", NivelController.deletarNivel);

module.exports = router;
