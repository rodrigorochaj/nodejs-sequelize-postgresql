const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router
  .get("/pessoas", PessoaController.buscarTodasPessoas)
  .get("/pessoa/:id", PessoaController.buscarPessoa)
  .post("/novaPessoa", PessoaController.criarPessoa)
  .put("/atualizaPessoa/:id", PessoaController.atualizarPessoa)
  .delete("/deletaPessoa/:id", PessoaController.deletarPessoa)
  .get(
    "/pessoa/:estudanteId/matricula/:matriculaId",
    PessoaController.buscaMatricula
  )
  .post("/pessoa/:estudanteId/novaMatricula", PessoaController.criarMatricula)
  .put(
    "/pessoa/:estudanteId/atualizaMatricula/:matriculaId",
    PessoaController.atualizarMatricula
  )
  .delete("/deletaMatricula/:matriculaId", PessoaController.deletarMatricula);

module.exports = router;
