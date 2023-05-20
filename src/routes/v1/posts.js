const router = require("express").Router();

router
  .get("/", (req, res) => {
    res.send("Hola GONZALO!");
  })
  .post("/", (req, res) => {})
  .put("/", (req, res) => {})
  .delete("/", (req, res) => {});

module.exports = router;
