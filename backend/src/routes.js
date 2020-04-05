import express from 'express';

import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';
import OperationController from './controllers/OperationController';
import TransferController from './controllers/TransferController';

import authenticate from './middleware/authenticate';

const routes = express.Router();

routes.post('/register', UserController.store);
routes.get('/users', UserController.index);
routes.post('/login', SessionController.store);
routes.put('/operation/:id', authenticate, OperationController.update);
routes.get('/operations', authenticate, OperationController.index);
routes.put('/transfer/:id', authenticate, TransferController.update);

export default routes;
