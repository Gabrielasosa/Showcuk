const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

//my routes
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const menuss = require("./routes/api/menuss");

const app = express();

//Body parser Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//conguracion de la BD
const db = require("./config/keys").mongoURI;

//Coneccion con Mongo DB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//passport Middleware
app.use(passport.initialize());

//passport config
require("./config/passport")(passport);

//Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
app.use("/api/menuss", menuss);

//Port server
const port = process.env.PORT || 3100;

// //starting the server
app.listen(port, () =>
  console.log(
    `Server runnung on port: ${port}` +
      ` 
Local port:   http://localhost:${port}`
  )
);
