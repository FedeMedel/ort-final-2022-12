'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("empleados", [
      {
        nombre: "Juan",
        apellido: "Perez",
        dni: 12345678,
        fechaIngreso: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        nombre: "Lucia",
        apellido: "Gomez",
        dni: 12343311,
        fechaIngreso: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
      {}
    );
  },


  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("empleados", null, {});
  }
};
