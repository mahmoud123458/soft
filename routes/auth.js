import { Router } from "express";
import { home, homeAdmin, homeDoctor, homeStudent } from "../controllers/home.js";
import { login, loginForm, register, registerForm } from "../controllers/user.js";
import { createStudent } from "../controllers/student.js";


const router = new Router();

router.get('/',home)

router.get('/admin',homeAdmin)

router.get('/createStudent',createStudent)

router.get('/doctor',homeDoctor)

router.get('/student',homeStudent)

router.get('/register',registerForm);

router.post('/register',register )

router.get('/login',loginForm);

router.post('/login',login )

export default router;
