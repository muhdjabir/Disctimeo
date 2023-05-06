const Scrim = require("../models/scrimModel");
const mongoose = require("mongoose");

// GET all scrims
const getScrims = async (req, res) => {
    const scrims = await Scrim.find({}).sort({createdAt: -1});
    res.status(200).json(scrims);
}


// GET a single scrim
const getScrim = async (req, res) => {
    const { id } = req.params;

    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({error: "No such scrim"});
    // }

    const scrim = await Scrim.findById(id);

    if (!scrim) {
        return res.status(404).json({error: 'No such scrim'});
    }
    res.status(200).json(scrim);
}

// Create a new scrim
const createScrim = async (req, res) => {
    const {name, time, date, description, venue, email} = req.body;
    // Add doc to db
    try {
        const scrim = await Scrim.create({name, time, date, description, members: [], venue, email});
        res.status(200).json(scrim);
    } catch(error) {
        res.status(400).json({error: error.message});
    }
}

// Delete a workout
const deleteScrim = async (req, res) => {
    const { id } = req.params;

    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({error: "No such scrim"});
    // }

    const scrim = await Scrim.findByIdAndDelete(id);

    if (!scrim) {
        return res.status(400).json({ error: 'No such scrim'});
    }
    res.status(200).json(scrim);
}

module.exports = {
    getScrims,
    getScrim,
    createScrim,
    deleteScrim,
}