import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        await mangoose.connect(process.env.MONGO_URL);
        console.log('mongo db connecteed succesfully');
    }catch(error){
        console.log(error);

    }
}
export default connectDB;