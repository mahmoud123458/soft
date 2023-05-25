import { Schema ,model} from "mongoose";

const doctor =new Schema({
    userName:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: false,
    },
    password:{
        type:String,
        required: false,

    },

},{timestamps: true});

const doctorModel =  model('doctor',doctor);

export default doctorModel;
