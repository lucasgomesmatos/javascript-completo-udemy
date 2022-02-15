require('dotenv').config();

// express
const express = require("express");
const app = express();

// mongoose (mongo DB)
const mongoose = require("mongoose");
mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit("pronto");
  })
  .catch(e => console.log(e));

// rotas
const routes = require("./routes");
const path = require("path");
const { middlewareGlobal } = require("./src/middlewares/middleware");

// requisição do body
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));

// requisição de views - render
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

// Middleware
app.use(middlewareGlobal);
app.use(routes);

app.on("pronto", () => {
  // servidor express
  app.listen(3000, () => {
    console.log("Servidor executando!");
  });
});
