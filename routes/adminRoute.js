const express = require('express');
const { viewUser, deleteUser, updateUser } = require('../controllers/adminController');
const { veryfyToken } = require('../middleware/auth');

const routes = express.Router();


routes.get('/viewUser',viewUser);
routes.delete('/deleteUser',deleteUser);
routes.put('/updateUser',updateUser);



module.exports = routes


