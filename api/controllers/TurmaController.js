const database = require("../models");

class TurmaController {
  static async buscarTodasTurmas(req, res) {
    try {
      const todasTurmas = await database.Turmas.findAll();
      return res.status(200).json(todasTurmas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async buscarTurma(req, res) {
    const { id } = req.params;
    try {
      const turma = await database.Turmas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(turma);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criarTurma(req, res) {
    const novaTurma = req.body;
    try {
      const novaTurmaCriada = await database.Turmas.create(novaTurma);
      return res.status(200).json(novaTurmaCriada);
    } catch (error) {
      return res.statuts(500).json(error.message);
    }
  }

  static async atualizarTurma(req, res) {
    const novosDados = req.body;
    const { id } = req.params;
    try {
      await database.Turmas.update(novosDados, { where: { id: Number(id) } });
      const turmaAtualizada = await database.Turmas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(turmaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletarTurma(req, res) {
    const { id } = req.params;
    try {
      await database.Turmas.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ message: "Deletado com sucesso !" });
    } catch (error) {
      return res.statuts(500).json(error.message);
    }
  }
}

module.exports = TurmaController;
