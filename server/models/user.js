"use strict";
const { Model } = require("sequelize");
const { hasPass } = require("../helper/bcrypt");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Todo, {
        sourceKey: "id",
        foreignKey: "UserId",
      });
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: { msg: "email is require" },
          isEmail: { args: true, msg: "invalid email format" },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [6, 8],
            msg: "your password must be 6-8 character",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.addHook("beforeCreate", (user, opt) => {
    user.password = hasPass(user.password);
  });

  return User;
};
