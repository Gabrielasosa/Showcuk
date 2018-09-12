const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//--modelo para los usuarios
const StarMenuSchema = new Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String }
});

//--exporto el modelo de mongose para el usuario
module.exports = User = mongoose.model("starmenu", StarMenuSchema);
