import express from 'express'

import AuthMiddleware from './app/middlewares/AuthMiddleware'

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import AccountController from './app/controllers/AccountController'
import CreditCardController from './app/controllers/CreditCardController'
import ArquivoController from './app/controllers/ArquivoController'
import multer from 'multer'

import multerConfig from './config/multer'

const routes = express.Router()

routes.post('/users', UserController.create)
routes.post('/sessions', SessionController.create)




routes.use(AuthMiddleware)
routes.post('/arquivos', multer(multerConfig).single("file"), ArquivoController.create)
routes.put('/arquivos/:id', multer(multerConfig).single("file"), ArquivoController.update)
// Rotas definidas apartir desse ponto são protegidas

// Arquivos routes


// Account routes
routes.post('/accounts', AccountController.create)
routes.get('/accounts', AccountController.list)
routes.get('/accounts/:id', AccountController.find)
routes.put('/accounts/:id', AccountController.update)
routes.delete('/accounts/:id', AccountController.destroy)

// Credit Cards routes
routes.post('/creditcards', CreditCardController.create)
routes.get('/creditcards', CreditCardController.list)
routes.get('/creditcards/:id', CreditCardController.find)
routes.put('/creditcards/:id', CreditCardController.update)
routes.delete('/creditcards/:id', CreditCardController.destroy)

export default routes
