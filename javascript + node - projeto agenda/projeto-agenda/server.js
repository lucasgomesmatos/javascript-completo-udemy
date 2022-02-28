require("dotenv").config();

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
  .catch((e) => console.log(e));

// Session require
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

// rotas
const routes = require("./routes");
const path = require("path");
const helmet = require("helmet");
const csrf = require("csurf");
const {
  middlewareGlobal,
  checkCsrfError,
  csrfMiddleware,
} = require("./src/middlewares/middleware");

app.use(helmet());

// requisição do body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "public")));

// Session
const sessionOptions = session({
  secret: "dsd[sadsjkbfisbsidfdsikbfsikfsdbfisd()",
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

app.use(sessionOptions);
app.use(flash());
// requisição de views - render
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(csrf());

// Middleware
app.use(middlewareGlobal, checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on("pronto", () => {
  // servidor express
  app.listen(3000, () => {
    console.log("Servidor executando!");
  });
});
