import express from 'express';

import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';

const routes = express.Router();

routes.post('/register', UserController.store);
routes.get('/users', UserController.index);
routes.post('/login', SessionController.store);

export default routes;
