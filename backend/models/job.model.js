import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    requirement:{
        type:String,
        //required:true
    },
    salary:{
        type:String,
        required:true
    },
    
    location:{
        type:String,
        required:true
    },

    jobType:{
        type:String,
        required:true
    },
    position:{
        type:Number,
        required:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectID,
        ref:'Company',
        required:true
    },
    created_by:{
        type:mongoose.Schema.Types.ObjectID,
        ref:'User',
        required:true
    },
    application:[
        {
        type:mongoose.Schema.Types>ObjectID,
        ref:'Application'
    }
   ]

});
export const Job = mongoose.model("Job",jobSchema);
