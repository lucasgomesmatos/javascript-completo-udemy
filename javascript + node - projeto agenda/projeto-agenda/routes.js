const express = require('express');
const route = express.Router();
const homeControllers = require('./src/controllers/homeControllers');
const loginController = require('./src/controllers/loginController');



// Rotas da home
route.get('/', homeControllers.index);

// Rotas de login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);


module.exports = route;