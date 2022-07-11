const mongoose = require('mongoose');
const serverSchema = new mongoose.Schema({
    guildID: String,
    prefijo: String,
    reaccion_roles: Array,
    sistema_tickets: { type: Object, default: { canal: "", mensaje: "" } },
    sugerencias: { type: String, default: "" },
    bienvenida: { type: Object, default: { canal: "", mensaje: "", imagen: "" } },
})
const model= mongoose.model("ConfigServer", serverSchema);
module.exports = model;
