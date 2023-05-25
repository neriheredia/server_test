const mongoose = require("mongoose");
const seederUser = require("./seederUser");

const dbConnect = async () => {
  const env = process.env.NODE_ENV;
  const DB_URL =
    env === "development" ? process.env.MONGO_URI : process.env.MONGO_ATLAS;

  await mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("🚀 Database connected");
      console.log("Creando base de datos...");
      seederUser();
    })
    .catch((err) => {
      console.log("Database ERROR!!!", err);
    });
};

module.exports = dbConnect;
