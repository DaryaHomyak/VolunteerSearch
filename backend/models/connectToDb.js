import { Sequelize, DataTypes } from "sequelize";

// Подключение к базе данных
export const db = new Sequelize({
  dialect: "sqlite",
  storage: "./db.db",
});
