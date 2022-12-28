import express from "express";
import db from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import roleRoutes from "./routes/roleRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

import checkMethod from "./middlewares/checkMethod.js";

const app = express();

try {
  await db.authenticate();
  console.log("Conexión establecida con éxito.");
} catch (error) {
  console.error("No se pudo conectar a la base de datos:", error);
}

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/tasks", checkMethod, taskRoutes);

app.listen(3000);
