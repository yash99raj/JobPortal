import mongoose from "mongoose"

const companySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    descreption:{
        type:String,
    },
    website:{
        type:String,
        
    },
    location:{
        type:String,
    },
    jobType:{
        type:String,
        required:true
    },
    positon:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    created_by:{
        type:String,
        required:true
    },
    application:{
        type:String,
        required:true
    },
},{timestaps:true})
export const Job = mongoose.model("job",jobSchema);