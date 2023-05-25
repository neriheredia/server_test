const router = require("express").Router();
const {
  getAllUserController,
  createUserController,
  updateUserController,
  deleteUserController,
  getUserByIdController,
} = require("../../controllers/usersControllers");

router
  .get("/", getAllUserController)
  .get("/:id", getUserByIdController)
  .post("/", createUserController)
  .put("/:id", updateUserController)
  .delete("/:id", deleteUserController);

module.exports = router;
