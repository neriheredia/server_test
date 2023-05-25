const {
  getAllUserServices,
  createUserServices,
  updateUserServices,
  deleteUserServices,
  getUserByIdServices,
} = require("../services/usersServices");

const getAllUserController = async (req, res) => {
  const id = req.params.id;
  try {
    if (id) {
      const response = await getUserByIdServices(id);
      return res.status(200).json({ message: "Success", data: response });
    }
    const response = await getAllUserServices();
    res.status(200).json({ message: "Success", data: response });
  } catch (error) {
    res.status(400).json({ message: "Error", data: error });
  }
};

const createUserController = async (req, res) => {
  const user = req.body;
  try {
    const newUser = await createUserServices(user);
    res.status(201).json({ message: "Created user", data: newUser });
  } catch (error) {
    res.status(400).json({ message: "Error", data: error });
  }
};

const updateUserController = async (req, res) => {
  const id = req.params.id;
  const user = req.body;
  try {
    const response = await updateUserServices(id, user);
    res.status(200).json({ message: "Updated user", data: response });
  } catch (error) {
    res.status(400).json({ message: "Error", data: error });
  }
};

const deleteUserController = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await deleteUserServices(id);
    res.status(200).json({ message: "Deleted user", data: response });
  } catch (error) {
    res.status(400).json({ message: "Error", data: error });
  }
};

const getUserByIdController = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await getUserByIdServices(id);
    res.status(200).json({ message: "User", data: response });
  } catch (error) {
    res.status(400).json({ message: "Error", data: error });
  }
};

module.exports = {
  getAllUserController,
  createUserController,
  updateUserController,
  deleteUserController,
  getUserByIdController,
};
