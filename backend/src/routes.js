const express = require('express');

const SessionController = require('./controllers/SessionController');
const UsersController  = require('./controllers/UsersController');
const NewpasswordController  = require('./controllers/NewpasswordController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/users', UsersController.index);
routes.post('/users', UsersController.create);
routes.put('/users/:id', UsersController.update);

routes.put('/password/:id', NewpasswordController.update);

module.exports = routes;