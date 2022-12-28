import { DataTypes } from "sequelize";
import db from "../config/db.js";

const User = db.define("Users", {


  name: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  address: {
    type: DataTypes.STRING,
  },
},{
    tableName: "Users",
});

User.sync();


export default User;
