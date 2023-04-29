const express = require('express');
const {
    getUsers,
    getUser, 
    createUser,
    deleteUser,
updateUser} = require('../controllers/userController')

const router = express.Router();

// GET all users
router.get('/', getUsers);

//Get a single user
router.get('/:id', getUser);

//Post a new user
router.post('/', createUser);

//DELETE a user
router.delete('/:id', deleteUser);

//Update a user
router.patch('/:id', updateUser);

module.exports = router;
