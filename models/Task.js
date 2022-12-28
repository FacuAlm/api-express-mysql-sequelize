import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Task = db.define("Tasks", {
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
}, {
    tableName: "Tasks",
});

Task.sync();

export default Task;