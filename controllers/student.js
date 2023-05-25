import user from "../models/user.js";

export const createStudent = (req, res) => {
    res.render('students/createStudent.handlebars');
    
} 

export const store = async (req, res) => {
    const { name, email, password, academicNumber } = req.body;

    await user.create({
        username:name,
        email:email,
        password:password,
        academicNumber: academicNumber,
        type: 'Student'
        // doctor:req.user._id
    });

    res.render('home/homeAdmin.handlebars')
};
