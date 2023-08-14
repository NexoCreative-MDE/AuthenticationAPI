const { getAll, create, getOne, remove, update, verifyUser, login, logged, resetPassword, updatePassword } = require('../controllers/user.controller');
const express = require('express');
const { verifyJwt } = require('../utils/verify');

const routerUser = express.Router();

routerUser.route('/')
    .get(verifyJwt, getAll)
    .post(create);
    
routerUser.route('/login')
    .post(login)
    
routerUser.route('/me')
    .get(verifyJwt, logged)
    
routerUser.route('/reset_password')
    .post(resetPassword)
    
//Dinamics routes
routerUser.route('/verify/:code')
    .get(verifyUser)
    
routerUser.route('/reset_password/:code')
    .post(updatePassword)

routerUser.route('/:id')
    .get(verifyJwt, getOne)
    .delete(verifyJwt, remove)
    .put(verifyJwt, update);

module.exports = routerUser;