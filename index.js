const app = require("./src/app");
const dbConnect = require("./src/db/mongodb");

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server on port ${port}`);
  //AQUI ME CONECTO A LA BASE DE DATOS
  dbConnect();
});
