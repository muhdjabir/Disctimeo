const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const trialSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    club: {
        type: String,
        required: true
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
    registration: {
        type: String,
        required: false
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

module.exports = mongoose.model('Trial', trialSchema);