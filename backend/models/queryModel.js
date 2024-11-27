import mongoose from "mongoose";

const querySchema = new mongoose.Schema({
    user: {type:String,required:true},
    mail: {type:String,required:true},
    query: {type:String, required:true}
})

const queryModel = mongoose.models.query || mongoose.model("query", querySchema);
export default queryModel;