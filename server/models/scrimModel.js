const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scrimSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    time: {
        type: String,
        required: false
    },
    members: {
        type: [],
        required: false
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('Scrim', scrimSchema);