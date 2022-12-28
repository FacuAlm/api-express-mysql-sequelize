import Rol from "../models/Role.js";

export const createRole = async (req, res) => {
  const rol = await Rol.create(req.body);
  res.json(rol);
};

export const getRoles = async (req, res) => {
  const rols = await Rol.findAll();
  res.json(rols);
};

export const getRole = async (req, res) => {
  const rol = await Rol.findOne({ where: { id: req.params.id } });
  res.json(rol);
};

export const updateRole = async (req, res) => {
  const rol = await Rol.findOne({ where: { id: req.params.id } });

  await rol.update(req.body);

  res.json(rol);
};

export const deleteRole = async (req, res) => {
  const rol = await Rol.findOne({ where: { id: req.params.id } });

  await rol.destroy();

  res.json({ message: "Rol deleted" });
};
