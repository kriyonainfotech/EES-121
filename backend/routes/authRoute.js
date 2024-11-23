const express = require('express');
const { register, login,user, logout } = require('../controllers/authController');

const routes = express.Router();
const {veryfyToken} = require('../middleware/auth') 


routes.post('/register',register);
routes.post('/login',login );
routes.get('/user',user );
routes.get('/logout',logout );

module.exports = routes


