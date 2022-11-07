"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pessoa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pessoa.hasMany(models.Turmas, {
        foreignKey: "docente_id",
      });
      pessoa.hasMany(models.Matriculas, {
        foreignKey: "estudante_id",
      });
    }
  }
  pessoa.init(
    {
      nome: DataTypes.STRING,
      ativo: DataTypes.BOOLEAN,
      email: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "pessoa",
    }
  );
  return pessoa;
};
