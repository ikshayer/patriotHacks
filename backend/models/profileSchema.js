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
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    daysAvailable: {
        type: String,
        required: true
    },
    location:   {
        type: String,
        required: true
    },
    skills: {
        type: String,
        required: true
    },
    preferences: {
        type: String,
        required: true
    },
    contactInformation: {
        type: String,
        required: true
    }

})

const profileModel = mongoose.model('profile', profileSchema)

export default profileModel