import mongoose from "mongoose";

const cvSchema = mongoose.Schema({
    userCv : {type:String, require:true}
})

const cvModel = mongoose.model('cv', cvSchema)
export {cvModel}