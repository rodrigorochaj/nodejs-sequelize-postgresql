const database = require("../models");

class NiveisController {
  static async buscarTodosNiveis(req, res) {
    try {
      const todosNiveis = await database.Niveis.findAll();
      return res.status(200).json(todosNiveis);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async buscarNivel(req, res) {
    const { id } = req.params;
    try {
      const nivel = await database.Niveis.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(nivel);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criarNivel(req, res) {
    const novoNivel = req.body;
    try {
      const novaNivelCriado = await database.Niveis.create(novoNivel);
      return res.status(200).json(novaNivelCriado);
    } catch (error) {
      return res.statuts(500).json(error.message);
    }
  }

  static async atualizarNivel(req, res) {
    const novosDados = req.body;
    const { id } = req.params;
    try {
      await database.Niveis.update(novosDados, { where: { id: Number(id) } });
      const nivelAtualizado = await database.Niveis.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(nivelAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletarNivel(req, res) {
    const { id } = req.params;
    try {
      await database.Niveis.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ message: "Deletado com sucesso !" });
    } catch (error) {
      return res.statuts(500).json(error.message);
    }
  }
}

module.exports = NiveisController;
