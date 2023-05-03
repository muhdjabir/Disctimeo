const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clubSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: false
    },
    members: {
        type: [],
        required: false
    },
    year: {
        type: Number,
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

module.exports = mongoose.model('Club', clubSchema);