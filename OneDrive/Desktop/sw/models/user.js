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


  password:{
    type: String,
    required: true,
  },
  
  type:{
    type: String,
    required: true,
  },

},{timestamps: true});

const subjectModel =  model('user',user);

export default subjectModel;
