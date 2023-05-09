const Trial = require("../models/trialModel");
const mongoose = require("mongoose");

// GET all trials
const getTrials = async (req, res) => {
    const trials = await Trial.find({}).sort({date: -1});
    res.status(200).json(trials);
}


// GET a single trial
const getTrial = async (req, res) => {
    const { id } = req.params;

    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({error: "No such trial"});
    // }

    const trial = await Trial.findById(id);

    if (!trial) {
        return res.status(404).json({error: 'No such trial'});
    }
    res.status(200).json(trial);
}

// Create a new trial
const createTrial = async (req, res) => {
    const {name, club, time, date,members, description, registration, venue,  email} = req.body;
    // Add doc to db
    try {
        const trial = await Trial.create({name, club, time, date, description, members, registration, venue, email});
        res.status(200).json(trial);
    } catch(error) {
        res.status(400).json({error: error.message});
    }
}

// Delete a workout
const deleteTrial = async (req, res) => {
    const { id } = req.params;

    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({error: "No such trial"});
    // }

    const trial = await Trial.findByIdAndDelete(id);

    if (!trial) {
        return res.status(400).json({ error: 'No such trial'});
    }
    res.status(200).json(trial);
}

const updateTrial = async (req, res) => {
    const { id } = req.params;

    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({error: "No such trial"});
    // }

    const trial = await Trial.findByIdAndUpdate(id, {
        ...req.body
    })
    if (!trial) {
        return res.status(400).json({ error: 'No such trial'});
    }
    res.status(200).json(trial);
}

module.exports = {
    getTrials,
    getTrial,
    createTrial,
    deleteTrial,
    updateTrial,
}