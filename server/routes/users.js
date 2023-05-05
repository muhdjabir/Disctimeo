const express = require('express');
const {
    getUsers,
    getUser, 
    createUser,
    deleteUser,
updateUser} = require('../controllers/userController')
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

//Post a new user
router.post('/', createUser);


// GET all users
router.get('/', getUsers);

router.use(requireAuth);


//Get a single user
router.get('/:id', getUser);



//DELETE a user
router.delete('/:id', deleteUser);

//Update a user
router.patch('/:id', updateUser);

module.exports = router;
