import { Schema ,model} from "mongoose";
//import subject from '../models/subject.js'
const user =new Schema(
{
  username:{
    type: String,
    required: true,
  },

  email:{
    type: String,
    required: true,
  },

  academicNumber:{
    type:Number,
    required: false,
},

  password:{
    type: String,
    required: true,
  },
  
  type:{
    type: String,
    required: false,
  },

},{timestamps: true});

const studentModel =  model('user',user);

export default studentModel;
