"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "Work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "kids",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "home",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoLists", null, {});
  },
};
