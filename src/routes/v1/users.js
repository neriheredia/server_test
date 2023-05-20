const router = require("express").Router();

router
  .get("/nico", (req, res) => {
    res.send("Hola Nico!");
  })
  .post("/nico", (req, res) => {})
  .put("/nico", (req, res) => {})
  .delete("/nico", (req, res) => {});

module.exports = router;
