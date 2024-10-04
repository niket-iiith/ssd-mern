const express = require('express');
const User = require('../model/user');
const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, password, confirmPassword } = req.body; 
    try {
        if(password !== confirmPassword) { 
            return res.status(400).json({ message: "Password and confirm password do not match" });
        }
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Username already exists." });
        }
        const newUser = new User({ username, password }); 
        await newUser.save();
        res.status(201).json({ message: "User registered successfully." });
    } catch (error) {
        res.status(500).json({ message: "Server error." });
    }
});


// User Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user || password !== user.password) {
            return res.status(400).json({ message: "Invalid credentials." });
        }
        req.session.user = { id: user._id, username: user.username };
        res.json({ message: "Login successful." });
    } catch (error) {
        res.status(500).json({ message: "Server error." });
    }
});


router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: "Server error." });
        }
        res.json({ message: "Logout successful." });
    });
});

const checkAuth = (req, res, next) => {
    if (!req.session.user) {
        return res.status(401).json({ message: "Unauthorized access." });
    }
    next();
};

module.exports = { router, checkAuth };
