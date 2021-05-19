"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Rakan Douli ",
          email: "rakan@gmail.com",
          phone: "9292929",
          password: "123321",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sam Mavi ",
          email: "sam@gmail.com",
          phone: "24122929",
          password: "233321",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ash Mike",
          email: "ash@gmail.com",
          phone: "7772929",
          password: "443321",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('users', null, {});
     */
  },
};
