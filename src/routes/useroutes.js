const express = require('express');
const userRouter =express.Router();
const userController =require('../controllers/usercontroller');

userRouter.post('/users',userController.createUser);
userRouter.get('/users',userController.getUsers);
userRouter.get('/users/:id',userController.getUserById);
userRouter.put('/users/:id',userController.UpdateUserById);
userRouter.delete('/users/:id',userController.deleteUserById);

module.exports = userRouter;
