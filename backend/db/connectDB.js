import mongoose from "mongoose";

export const connectDB = async () =>{
    try {
        console.log("mongo_uri: ", process.env.MONGO_URI);
        const con = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongoose Connected : ${con.connection.host}`);
        
    } catch (error) {
        console.log('Error connection to MongoDB: ', error.message);
        process.exit(1);
        
    }
}