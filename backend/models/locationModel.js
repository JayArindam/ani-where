import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true},
    image: { type: String, required: true },
    category:{ type:String, required:true},
})

const locationModel = mongoose.models.packages || mongoose.model("packages", locationSchema);
export default locationModel;