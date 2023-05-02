const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema

const authSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    }
})

// Static signup method
authSchema.statics.signup = async function(email, password, role) {
    //validation
    if (!email || !password) {
        throw Error('All fields must be filled');
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid');
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password is not strong enough');
    }

    // Checking whether email is registered
    const exists = await this.findOne({ email });
    if (exists) {
        throw Error("Email already in use");
    }

    // bcrpyt also hashes according to source
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const auth = await this.create({ email, password: hash, role});
    return auth;
}

// static login method
authSchema.statics.login = async function(email, password) {
    if (!email || !password) {
        throw Error('All fields must be filled');
    }

    const user = await this.findOne({ email });
    if (!user) {
        throw Error("Email is not registered");
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw Error("Incorrect password");
    }
    return user;
}

module.exports = mongoose.model('Auth', authSchema);