const mongoose = require("mongoose");

const inventarySchema = new mongoose.Schema({
    Guild: String,
    User: String,
    ItemEmoji: Object,
    Inventory: Object,
});

module.exports = mongoose.model(
  'inventory', inventarySchema
)