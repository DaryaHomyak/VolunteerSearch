import { DataTypes } from "sequelize";
import { db } from "./connectToDb.js";

// Определение модели книги
export const Book = db.define(
  "Book",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    author: DataTypes.STRING,
    name: DataTypes.STRING,
  },
  {
    createdAt: false,
    updatedAt: false,
    tableName: "books",
  }
);
