const express = require('express');

// Controller functions
const {loginUser, signupUser} = require('../controllers/authController');

const router = express.Router();

//login route
router.post('/login',loginUser);

// signup router
router.post('/signup', signupUser);

module.exports = router;