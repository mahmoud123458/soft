import { Schema ,model} from "mongoose";

const subject =new Schema({
    name:{
        type:String,
        required: true,

    },
    code:{
        type:String,
        required: false,

    },
    preRequest:{
        type:String,
        required: false,
    },
    department:{
        type:String,
        required: false,
        ref: 'department',

    },
    doctor:{
        type:Schema.Types.ObjectId,
        required: false,
        ref: 'user'

    },
},{timestamps: true});

const subjectModel =  model('subject',subject);

export default subjectModel;
