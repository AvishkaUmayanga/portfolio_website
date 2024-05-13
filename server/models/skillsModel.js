import mongoose from "mongoose";

const skillSchema = mongoose.Schema({
    skillImg: {type: String, require: true}
})

const skillModel = mongoose.model('skills', skillSchema)
export {skillModel}