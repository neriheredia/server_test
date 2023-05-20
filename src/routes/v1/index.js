const router = require("express").Router();
const fs = require("fs");

const INDEX = "index";
const PATH_ROUTER = `${__dirname}`;

fs.readdirSync(PATH_ROUTER).filter((file) => {
  const fileWithOutExt = file.split(".").shift();
  const skip = [INDEX].includes(fileWithOutExt);
  if (!skip) {
    router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`));
  }
});

module.exports = router;
