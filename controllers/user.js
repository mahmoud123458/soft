import user from '../models/user.js'
import bcrypt from 'bcryptjs';

import jwt from "jsonwebtoken"
export const registerForm = (req, res) => {
    res.render('authentication/register');
}

export const register = async (req, res) => {
    const { username, email, password } = req.body;
    console.log(username, email, password);

    const salt = bcrypt.genSaltSync(10);

    const encryptedPassword = bcrypt.hashSync(password, salt)

    console.log(encryptedPassword)
    await user.create({ username, email, password: encryptedPassword })
    res.redirect('/login')
}

export const loginForm = (req, res) => {
    res.render('authentication/login');
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    const loggeduser = await user.findOne({ email })

    const isCorrectedPassword = bcrypt.compareSync(password, loggeduser.password)

    if (!isCorrectedPassword) {
        return res.send("incorrect credentials")
    }

    const data = {

        _id: loggeduser._id,
        email: loggeduser.email,

    };
const jwtToken=  jwt.sign(data,process.env.JWT_SECTRET);
 
    res.cookie('token', jwtToken);
    res.send('login');
}