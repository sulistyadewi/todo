"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Todos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notNull: {
            msg: "name is require",
          },
          notEmpty: {
            msg: "name is require",
          },
        },
      },
      desc: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notNull: {
            msg: "name is require",
          },
          notEmpty: {
            msg: "name is require",
          },
        },
      },
      status: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        validate: {
          notNull: {
            msg: "name is require",
          },
          notEmpty: "name is require",
        },
      },
      due_date: {
        allowNull: false,
        type: Sequelize.DATE,
        validate: {
          msg: "name is require",
        },
        notEmpty: "name is require",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("todos");
  },
};
