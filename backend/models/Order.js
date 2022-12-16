import { DataTypes } from "sequelize";
import { db } from "./connectToDb.js";

export const Order = db.define(
  "Order",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    bookId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  },
  {
    createdAt: false,
    updatedAt: false,
    tableName: "orders",
  }
);
