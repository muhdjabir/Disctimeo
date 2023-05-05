const express = require('express');
const {
    getScrims,
    getScrim, 
    createScrim,
    deleteScrim
} = require('../controllers/scrimController')
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

//Post a new Scrim
router.post('/', createScrim);


// GET all Scrims
router.get('/', getScrims);

// router.use(requireAuth);


//Get a single Scrim
router.get('/:id', getScrim);



//DELETE a Scrim
router.delete('/:id', deleteScrim);

// //Update a Scrim
// router.patch('/:id', updateScrim);

module.exports = router;