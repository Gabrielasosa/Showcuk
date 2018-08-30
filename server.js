const express = require("express");
const mongoose = require("mongoose");

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
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
//Puerto del servidor
const port = process.env.PORT || 3100;

//settings
app.listen(port, () =>
  console.log(
    `Server runnung on port: ${port}` +
      ` 
Local port:   http://localhost:${port}/`
  )
);

// //Middlewares
// app.use(morgan('dev'));

// app.use(express.json());

//
// app.use('/api/menu', require('./routes/menu.routes'));
// app.use('/api/user', require('./routes/user.routes'));

// //static Files
// app.use(express.static(path.join(__dirname, 'public')));

// //starting the server
// app.listen(app.get('port'), () => {
//     console.log(` Local port:   http://localhost:${app.get('port')}/`);
// });
