const router = require('express').Router();
const User = require('../models/User');
const RefreshToken =require('../models/RefreshToken');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { verifyAuthToken, verifyRefreshToken } = require('./verifyToken');
const {registerValidation, loginValidation} = require('./validation');

// Your code goes here


//Register
router.post('/register', async (req, res) =>{
    // your code goes
})

// Login
router.post('/login',async (req, res) =>{
    // your code goes
})  

// generate New Auth-Token
router.get('/newAuthToken', verifyRefreshToken, async (req, res) =>{
    // your code goes
})

// logout
router.delete('/logout', verifyRefreshToken, async (req, res) =>{
    // your code goes
})

// get user details
router.get('/me', verifyAuthToken, async (req, res) => {
    // your code goes
})



module.exports = router;