const express = require('express');
const route = express.Router();
const homeControllers = require('./src/controllers/homeControllers');
const loginController = require('./src/controllers/loginController');



// Rotas da home
route.get('/', homeControllers.index);

// Rotas de login
route.get('/login/index', loginController.index)


module.exports = route;