import mongoose from "mongoose";
const userSchema = new mangoose.Schema({
    fullname:{
        type:String,
        required:true
    },email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['student','recruiter']
    },
    profile:{
        bio:{type:String},
        skills:[{type:string}],
        resume:{type:String},
        resumeOriginalName:{type:String},
        company:{type:mongoose.Schema.Types.ObjectId, ref:'Company'},
        profilePhoto:{
            type:String,
            default:""
        }
    },
},{timestamps:true});
export const User = momgoose.model('User',userSchema);