import { Router } from "express";
import { home, homeAdmin, homeDoctor, homeStudent } from "../controllers/home.js";
import { login, loginForm, register, registerForm } from "../controllers/user.js";

const router = new Router();

router.get('/',home)

router.get('/admin',homeAdmin)

router.get('/admin',homeDoctor)

router.get('/admin',homeStudent)

router.get('/register',registerForm);

router.post('/register',register )

router.get('/login',loginForm);

router.post('/login',login )

export default router;
