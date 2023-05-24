import subject from "../models/subject.js"
import department from "../models/department.js"
import jwt from "jsonwebtoken"

export const index = async (req, res) => {
  
     const subjects = await subject.find({}, {}).lean();

    console.log(subjects);
    res.render('subjects/index', { subjects })
};


export const create = async (req, res) => {
    const departments = await department.find().lean();
    res.render('subjects/create',{departments})
};


export const store = async (req, res) => {
    const { name, code, preRequest, department } = req.body;

    await subject.create({
        name:name,
        code:code,
        preRequest:preRequest,
        department: department,
        // doctor:req.user._id
    });

    res.redirect('/subjects');
};

export const show = async (req, res) => {

    //1- Grab the _id
    const { _id } = req.params;

    //2- Use the _id to get subject

    const singleSubject = await subject.findById({ _id}).lean();

    console.log(singleSubject);
    //3- Render "show" template

    res.render('subjects/show', { subject: singleSubject })
};

export const edit =async (req,res) =>{
    const { _id } = req.params;
    const editFormSubject =await subject.findById(_id).lean();
    const departments = await department.find().lean();
    res.render('subjects/edit',{departments,subject:editFormSubject})
};
export const update = async (req, res) => {
    const { name, code, preRequest,department } = req.body;
    const{_id}=req.params;
    
    await subject.findByIdAndUpdate(_id,{
        $set:{name, code, preRequest, department}
    
    })

    res.redirect('/subjects');
}

export const deleteOne = async(req,res)=>{
    const {_id}=req.params;
    
    await subject.findByIdAndDelete(_id );
    return res.redirect('/subjects')

    }
