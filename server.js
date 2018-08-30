const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

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

app.get("/", (req, res) => res.send("Server Conect! "));
//Routes
app.use("/api/user", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
//Puerto del servidor
const port = process.env.PORT || 3100;

// //starting the server
app.listen(port, () =>
  console.log(
    `Server runnung on port: ${port}` +
      ` 
Local port:   http://localhost:${port}/`
  )
);

//Middlewares

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //static Files
// app.use(express.static(path.join(__dirname, 'public')));
