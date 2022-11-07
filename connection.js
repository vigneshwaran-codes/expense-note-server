import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

export const mongo = () => {            
    //connection to mongodb from mongoose
    const MONGO_URL = process.env.MONGO_URI
    try {
        mongoose.connect(MONGO_URL)
    }
    catch (err) {
        process.exit()
    }
}