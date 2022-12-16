import { DataTypes } from "sequelize";
import { db } from "./connectToDb.js";

export const User = db.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: DataTypes.STRING,
    login: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    createdAt: false,
    updatedAt: false,
    tableName: "users",
  }
);
