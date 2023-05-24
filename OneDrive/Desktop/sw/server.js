import express from 'express';
import { engine } from 'express-handlebars';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();
import mongoose from 'mongoose';

import methodOverride from 'method-override';
mongoose.connect(process.env.mongoConnectionUrl)

import studentRouter from './routes/student.js'
import subjectRouter from './routes/subjects.js';
import departmentRouter from './routes/departments.js'
import authRoutes from './routes/auth.js';
import {authentication} from './middleware/authentication.js'
const app = express();

app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');


app.use('/subjects',authentication, subjectRouter)
app.use('/students', studentRouter)
app.use('/departments', departmentRouter)

app.use('/',authRoutes)

app.listen(process.env.port, () => {
    console.log(`Started the application on http://127.0.0.1:${process.env.port}`);
});
