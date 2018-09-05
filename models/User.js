const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//--modelo para los usuarios
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String },
  date: { type: Date, default: Date.now }
});

//--exporto el modelo de mongose para el usuario
module.exports = User = mongoose.model("users", UserSchema);
