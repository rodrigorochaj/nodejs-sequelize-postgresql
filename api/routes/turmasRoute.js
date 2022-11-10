const { Router } = require("express");
const TurmaController = require("../controllers/TurmaController");

const router = Router();

router
  .get("/turmas", TurmaController.buscarTodasTurmas)
  .get("/turma/:id", TurmaController.buscarTurma)
  .post("/novaTurma", TurmaController.criarTurma)
  .put("/atualizaTurma/:id", TurmaController.atualizarTurma)
  .delete("/deletaTurma/:id", TurmaController.deletarTurma);

module.exports = router;
