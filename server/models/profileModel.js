import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
    profileImg : {type: String, require:true}
})

const profileModel = mongoose.model('profile', profileSchema)
export {profileModel}