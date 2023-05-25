import { Router } from "express";
import { createStudent , store } from "../controllers/student.js"
const router = new Router();

router.get('/createStudent', createStudent);

router.post('/createStudent', store)


export default router;
