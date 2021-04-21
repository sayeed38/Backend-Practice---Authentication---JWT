const jwt = require('jsonwebtoken');

function verifyAuthToken (req, res, next) {
    // Your code goes here
}   

function verifyRefreshToken (req, res, next) {
    // Your code goes here
}

module.exports.verifyAuthToken = verifyAuthToken;
module.exports.verifyRefreshToken = verifyRefreshToken;