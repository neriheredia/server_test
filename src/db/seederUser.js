const UserModel = require("../models/User");

const seederUser = async () => {
  await UserModel.create(
    {
      userName: "NicoFront",
      password: "123456",
      email: "NicoFront@gmail.com",
    },
    {
      userName: "NicoBack",
      password: "123456",
      email: "NicoBack@gmail.com",
    },
    {
      userName: "Caro",
      password: "123456",
      email: "Caro@gmail.com",
    }
  );
  console.log("🚀 User collection created!");
};

module.exports = seederUser;
