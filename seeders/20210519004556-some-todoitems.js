"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "frontend",
          deadline: "25-June-2021",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "backend",
          deadline: "22-June-2021",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "styling",
          deadline: "30-June-2021",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
