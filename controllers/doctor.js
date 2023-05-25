import doctor from '../models/doctor.js'

export const create = (req, res) => {
    res.render('departments/create',{subject});
};

export const store = async (req, res) => {
    const { userName, email, password } = req.body;

    await doctor.create({
        userName,
        email,
        password,
    });
    res.redirect('/doctor')
};
