const Club = require('../models/clubModel');
const mongoose = require('mongoose');


// GET all clubs
const getClubs = async (req, res) => {
    const clubs = await Club.find({}).sort({createdAt: -1});
    res.status(200).json(clubs);
}


// GET a single club
const getClub = async (req, res) => {
    const { id } = req.params;
    console.log(id);

    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({error: "No such club"});
    // }

    const club = await Club.findOne({email: id});

    if (!club) {
        return res.status(404).json({error: 'No such club'});
    }
    res.status(200).json(club);
}

// Create a new club
const createClub = async (req, res) => {
    const {name, contact, year, description, venue, email} = req.body;
    // Add doc to db
    try {
        const club = await Club.create({name, contact, year, description, venue, email});
        res.status(200).json(club);
    } catch(error) {
        res.status(400).json({error: error.message});
    }
}

// Delete a workout
const deleteClub = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such club"});
    }

    const club = await Club.findOneAndDelete({ email: id});

    if (!club) {
        return res.status(400).json({ error: 'No such club'});
    }
    res.status(200).json(club);
}

// Update a club
const updateClub = async (req, res) => {
    const { id } = req.params;

    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({error: "No such club"});
    // }

    const club = await Club.findOneAndUpdate({email: id}, {
        ...req.body
    })
    if (!club) {
        return res.status(400).json({ error: 'No such club'});
    }
    res.status(200).json(club);
}

module.exports = {
    getClubs,
    getClub,
    createClub,
    deleteClub,
    updateClub
}