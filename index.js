// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import connectDB from './Database/config.js';
// import  stuRouter  from './Router/Student.router.js';


// dotenv.config()
// const app=express()
// app.use(cors())
// app.use(express.json())
// // const PORT=4000;
// const port=process.env.PORT

// connectDB()
// app.use('/api',stuRouter)

// app.listen(port,()=>{
//     console.log("App is running on the po;rt -", port);
// })

// index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Database/config.js';
import stuRouter from './Router/Student.router.js';
import mentRouter from './Router/Mentor.Router.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000; // Use 5000 if PORT is not defined in .env

connectDB();

app.use('/api', stuRouter);
app.use('/api', mentRouter);

app.listen(port, () => {
    console.log("App is running on the port -", port);
});
