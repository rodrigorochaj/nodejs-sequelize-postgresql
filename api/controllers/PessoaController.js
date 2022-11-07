const database = require("../models");
const pessoa = require("../models/pessoa");

class PessoaController {
  static async buscarTodasPessoas(req, res) {
    try {
      const todasPessoas = await database.pessoa.findAll();
      return res.status(200).json(todasPessoas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async buscarPessoa(req, res) {
    const { id } = req.params;
    try {
      const pessoa = await database.pessoa.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(pessoa);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criarPessoa(req, res) {
    const novaPessoa = req.body;
    try {
      const novaPessoaCriada = await database.pessoa.create(novaPessoa);
      return res.status(200).json(novaPessoaCriada);
    } catch (error) {
      return res.statuts(500).json(error.message);
    }
  }

  static async atualizarPessoa(req, res) {
    const novosDados = req.body;
    const { id } = req.params;
    try {
      await database.pessoa.update(novosDados, { where: { id: Number(id) } });
      const pessoaAtualizada = await database.pessoa.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(pessoaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletarPessoa(req, res) {
    const { id } = req.params;
    try {
      await database.pessoa.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ message: "Deletado com sucesso !" });
    } catch (error) {
      return res.statuts(500).json(error.message);
    }
  }
}

module.exports = PessoaController;
