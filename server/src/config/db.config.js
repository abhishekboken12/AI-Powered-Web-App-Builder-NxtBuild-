import mongoose from 'mongoose'

const connectDB = async () => {
    try{
        const mongoURL = process.env.MONGO_URL

        if(!mongoURL){
            throw new Error("MONGODB_URL is not defined in your .env file")
        }

        const conn = await mongoose.connect(mongoURL)
        console.log(`MongoDB Connection Error: ${error.message}`)
    }
}