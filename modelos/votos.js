const mongoose = require('mongoose');

const votos_votaciones = new mongoose.Schema({
    messageID: String,
    yes: {type: Array, default: []},
    no: {type: Array, default: []},
    autor: {type: String, default: ""}
})

const model = mongoose.model("votos_votaciones", votos_votaciones);

module.exports = model;