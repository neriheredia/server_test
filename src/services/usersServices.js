const UserModel = require("../models/User");

const getAllUserServices = async (filter) => {
  // filter = { edad: { $gte: 18 }
  const users = await UserModel.find();
  return users;
};

const createUserServices = async (user) => {
  const newUser = await UserModel.create(user);
  return newUser;
};

const updateUserServices = async (id, user) => {
  const updateUser = await UserModel.findByIdAndUpdate(
    { _id: id },
    { $set: user },
    { new: true }
  );
  return updateUser;
};

const deleteUserServices = async (id) => {
  const deleteUser = await UserModel.findByIdAndDelete({ _id: id });
  return deleteUser;
};

const getUserByIdServices = async (id) => {
  const user = await UserModel.findById({ _id: id });
  return user;
};

module.exports = {
  getAllUserServices,
  createUserServices,
  updateUserServices,
  deleteUserServices,
  getUserByIdServices,
};
