import mongoose from "mongoose";

const Connect = async () => {

    try{
        await mongoose.connect(process.env.MONGO)
    }catch (err){
        throw new Error("Couldn't connect to Mongo")
    }
}  

export default Connect