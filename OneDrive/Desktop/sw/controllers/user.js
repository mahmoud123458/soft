import user from '../models/user.js'
import bcrypt from 'bcryptjs';

import jwt from "jsonwebtoken"
export const registerForm = (req, res) => {
    res.render('authentication/register');
}

export const register = async (req, res) => {
    const { username, email, password, character } = req.body;
    console.log(username, email, password, character);

    const salt = bcrypt.genSaltSync(10);

    const encryptedPassword = bcrypt.hashSync(password, salt)

    console.log(encryptedPassword)
    await user.create({ username: username, email: email, password: encryptedPassword, type: character})
    res.redirect('/login')
}

export const loginForm = (req, res) => {
    res.render('authentication/login.handlebars');
}

export const login = async (req, res) => {
    const { email, password, character} = req.body;

    const loggeduser = await user.findOne({ email:email, type: character })

    const isCorrectedPassword = bcrypt.compareSync(password, loggeduser.password)

    if (!isCorrectedPassword) {
        return res.send("incorrect credentials")
    }

    const data = {

        _id: loggeduser._id,
        email: loggeduser.email,
        type: loggeduser.type,

    };
    const jwtToken = jwt.sign(data, process.env.JWT_SECTRET);

    if (character == 'Administrator') {
        res.render("home/homeAdmin.handlebars")  
    } 
    else if (character == 'Student') {
        res.render("home/homeStudent.handlebars")
    }
    else if (character == 'Doctor') {
        res.render("home/homeDoctor.handlebars")   
    }
    else{
        res.send('User is not Authorized')
    } 
    

    res.cookie('token', jwtToken);
}
