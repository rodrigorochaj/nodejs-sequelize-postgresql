"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "People",
      [
        {
          descr_nivel: "básico",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descr_nivel: "intermediário",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descr_nivel: "avançado",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {});
  },
};
