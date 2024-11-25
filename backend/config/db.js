import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://jay:jay@cluster0.w2lse.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=>console.log("DB Connected"))
}