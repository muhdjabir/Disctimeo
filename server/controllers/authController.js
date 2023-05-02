const Auth = require('../models/authModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'});
}


// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const auth = await Auth.login(email, password);

        // Create a token
        const token = createToken(auth._id);

        res.status(200).json({email, token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    res.json({msg: 'Login user'});
};

// signup user
const signupUser = async (req, res) => {
    const { email, password, role } = req.body;
    try {
        const auth = await Auth.signup(email, password, role);

        // Create a token
        const token = createToken(auth._id);

        res.status(200).json({email, token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = {loginUser, signupUser};