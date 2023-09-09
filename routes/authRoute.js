import express from "express";
import { registerController, loginController } from '../controllers/authController.js';

//router object
const router = express.Router()

//routing
//REGISTER || METHOD POST
router.post('/register', registerController)

//LOGIN || POST
router.post('/login', loginController)

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

export default router