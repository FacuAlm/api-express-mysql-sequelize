import User from "../models/User.js";

export const createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};

export const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

export const getUser = async (req, res) => {
    const user = await User.findOne({ where: { id: req.params.id } });
    res.json(user);
};

export const updateUser = async (req, res) => {
  const user = await User.findOne({ where: { id: req.params.id } });

  await user.update(req.body);

    res.json(user);
};

export const deleteUser = async (req, res) => {
    const user = await User.findOne({ where: { id: req.params.id } });
    
    await user.destroy();
    
    res.json({ message: "User deleted" });
};


