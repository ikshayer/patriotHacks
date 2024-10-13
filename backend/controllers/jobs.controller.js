
import mongoose from "mongoose";
import jobModel from "../models/jobSchema.js";

export const jobGet = async(req, res)=>{
    try{
        const jobs = await jobModel.find()
        res.status(200).json({
            success: true,
            data: jobs
        })
    }
    catch(error){
        res.status(500).json({
            success: false,
            msg: `Server Error: ${error.name}`
        })
    }
}

export const jobPost = async (req, res)=>{
    const job = req.body

    if(!job.title || !job.author || !job.description || !job.contactInfo || !job.time || !job.location ){
        return res.status(400).json({
            success: false,
            message: "Please enter valid information in all fields"
        })
    }
    const jobCreate = new jobModel(job)
    try{
        await jobCreate.save()
        res.status(200).json({
            success: true,
            data: jobCreate
        })
    }
    catch(error){
        console.log(`Error: ${error.name}`)
        res.status(500).json({
            success: false,
            msg: `Server Error: There was an error creating the job (${error.name})`
        })
    }
}

export const jobUpdate = async (req, res) =>{
    const {id} = req.params
    if(!id){
        return res.status(400).json({
            success: false,
            msg: "There was an error finding the id in param"
        })
    }

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            success: false,
            msg: "No jobs could be found with this ID"
        })
    }
    const job = req.body
    if(!job.title || !job.author || !job.description || !job.requirements || !job.age || !job.contactInfo || !job.time || !job.location){
        return res.status(400).json({
            success: false,
            msg: "Please enter valid values for all the fields"
        })
    }
    try{
        await jobModel.findByIdAndUpdate(id, job)
        res.status(200).json({
            success: true,
            data: job
        })
    }
    catch(error){
        res.status(500).json({
            success: false,
            msg: `Server Error: There was an error updating the product (${error.name})`
        })
    }
}

export const jobDelete = async (req, res) =>{
    const {id} = req.params
    if(!id){
        return res.status(400).json({
            success: false,
            msg: "There was an error finding the id in param"
        })
    }
    try{
        await jobModel.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            msg: "The job was deleted"
        })
    }
    catch(error){
        res.status(500).json({
            success: false,
            msg: `There was an error deleting the product (${error.name})`
        })
    }
    
}

