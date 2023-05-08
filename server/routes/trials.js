const express = require('express');
const {
    getTrials,
    getTrial, 
    createTrial,
    deleteTrial,
    updateTrial
} = require('../controllers/trialController')
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

// GET all Trials
router.get('/', getTrials);

router.use(requireAuth);

//Post a new Trial
router.post('/', createTrial);


//Get a single Trial
router.get('/:id', getTrial);

//DELETE a Trial
router.delete('/:id', deleteTrial);

// //Update a Trial
router.patch('/:id', updateTrial);

module.exports = router;