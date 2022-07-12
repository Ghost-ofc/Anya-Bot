const mongoose = require('mongoose');
const setupSchema = new mongoose.Schema({
    guildID: String,
    prefijo: String,
    bienvenida: { type: Object, default: { canal: "", mensaje: "", imagen: "" } },

})
const model= mongoose.model("Bienvenida", setupSchema);
module.exports = model;