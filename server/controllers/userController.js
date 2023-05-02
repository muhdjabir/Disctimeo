const User = require('../models/userModel');
const mongoose = require('mongoose');


// GET all users
const getUsers = async (req, res) => {
    const users = await User.find({}).sort({createdAt: -1});
    res.status(200).json(users);
}


// GET a single user
const getUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such user"});
    }

    const user = await User.findById(id);

    if (!user) {
        return res.status(404).json({error: 'No such user'});
    }
    res.status(200).json(user);
}

// Create a new user
const createUser = async (req, res) => {
    const {name, contact, years, position, level} = req.body;
    // Add doc to db
    try {
        const user = await User.create({name, contact, years, position, level})
        res.status(200).json(user);
    } catch(error) {
        res.status(400).json({error: error.message});
    }
}

// Delete a workout
const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such user"});
    }

    const user = await User.findOneAndDelete({ _id: id});

    if (!user) {
        return res.status(400).json({ error: 'No such user'});
    }
    res.status(200).json(user);
}

// Update a user
const updateUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such user"});
    }

    const user = await User.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if (!user) {
        return res.status(400).json({ error: 'No such user'});
    }
    res.status(200).json(user);
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser
}