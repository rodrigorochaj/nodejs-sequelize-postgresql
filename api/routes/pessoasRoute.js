const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router.get("/pessoas", PessoaController.buscarTodasPessoas);

router.get("/pessoa/:id", PessoaController.buscarPessoa);

router.post("/novaPessoa", PessoaController.criarPessoa);

router.put("/atualizaPessoa/:id", PessoaController.atualizarPessoa);

router.delete("/deletaPessoa/:id", PessoaController.deletarPessoa);

module.exports = router;
