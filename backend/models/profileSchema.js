import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,

    },
    age: {
        type: Number,
    },
    /*
    daysAvailable: {
        type: String,
        required: true
    },
    */
    location:   {
        type: String,
    },
    /*
    skills: {
        type: String,
        required: true
    },
    preferences: {
        type: String,
        required: true
    },
    */
    contactInformation: {
        type: String,
    }

})

const profileModel = mongoose.model('profile', profileSchema)

export default profileModel