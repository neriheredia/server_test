import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();

const port = process.env.PORT || 4000;

app.use(cors());

app.get("/nico", (req, res) => {
  res.send("Hola Nico!");
});

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
