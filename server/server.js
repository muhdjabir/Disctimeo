require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const clubRoutes = require('./routes/club');
const scrimRoutes = require('./routes/scrim');
const trialRoutes = require('./routes/trials');
const homeRoutes = require('./routes/home');

// express app
const app = express();

// middleware
app.use(express.json());  // Allows for the passing in of json object for req
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

// Routes
app.use('/', homeRoutes);
app.use('/api/users', userRoutes); // Basically allows the use of routes from userRoutes
app.use('/api/auth', authRoutes);
app.use('/api/clubs', clubRoutes);
app.use('/api/scrims', scrimRoutes);
app.use('/api/trials', trialRoutes);
 
//cConnect to DB
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        // Listen for requests
        app.listen(process.env.PORT, () => {
            console.log("Connected to DB & listening on port", process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    })