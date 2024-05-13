import mongoose from "mongoose";

const experienceSchema = mongoose.Schema({
    position:{type: String, require: true},
    company:{type: String, require: true},
    year:{type: String, require: true},
})

const experienceModel = mongoose.model('experience', experienceSchema)
export {experienceModel}