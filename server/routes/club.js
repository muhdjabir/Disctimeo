const express = require('express');
const {
    getClubs,
    getClub, 
    createClub,
    deleteClub,
updateClub} = require('../controllers/clubController')
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

//Post a new club
router.post('/', createClub);

// router.use(requireAuth);

// GET all clubs
router.get('/', getClubs);

//Get a single club
router.get('/:id', getClub);

//DELETE a club
router.delete('/:id', deleteClub);

//Update a club
router.patch('/:id', updateClub);

module.exports = router;