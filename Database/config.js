// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import { Student, Mentor } from '../Models/Student.Schema.js';




// dotenv.config()
// const mongoDBConnectionString=process.env.MONGODBCONNECTIONSTRING
// const connectDB = async()=>{
//     try {
//         console.log("connection string", mongoDBConnectionString);
//         const connection=await mongoose.connect(mongoDBConnectionString)
//         console.log("connected to the MongoDB");
//         return connection;
//     } catch (error) {
// console.log("Error", error);        
//     }
// }
// export default connectDB

// Database/config.js
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const mongoDBConnectionString = process.env.MONGODBCONNECTIONSTRING;

const connectDB = async () => {
    try {
        console.log("Connection string:", mongoDBConnectionString);
        const connection = await mongoose.connect(mongoDBConnectionString, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
        return connection;
    } catch (error) {
        console.log("Error:", error);
    }
};

export default connectDB;
