import express from "express"
const app = express()
import { connectDB } from "./config/db.js"
import jobRouter from "./routes/jobs.js" 
import profileRouter from './routes/profiles.js'

import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use("/jobs", jobRouter)
app.use("/profiles", profileRouter)


app.listen(PORT, (req, res) =>{
    connectDB()
    console.log(`Server is running on http://localhost:${PORT}`)
})

app.get('/', (req, res) =>{
    res.send('Backend works!')
})
