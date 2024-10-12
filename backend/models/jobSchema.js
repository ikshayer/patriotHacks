import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: {
        type: String
    },
    age: {
        type: String,
        required: true
    },
    contactInfo: {
        type: String,
        required: true
    },
    tags: {
        type: String,
    },
    time: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
},{
    timestamps:true
})


const jobModel = mongoose.model('jobs', jobSchema)

export default jobModel