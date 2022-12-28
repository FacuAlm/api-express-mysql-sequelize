import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Role = db.define(
  "Roles",
  {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "Roles",
  }
);

Role.sync();

export default Role;
