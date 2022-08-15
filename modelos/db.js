const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    isAFK: {
        type: Boolean,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    at: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('afk', schema);