import express from 'express';
import { Login, Logout, Register } from '../controllers/userController.js';
const userRouter = express.Router();

userRouter.route('/register').post(Register);
userRouter.route('/login').post(Login);
userRouter.route('/logout').get(Logout);

export default userRouter;