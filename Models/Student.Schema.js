// //Schema-collection structure

// import mongoose from 'mongoose';
 

// const stuSchema = mongoose.Schema({
//     firstName:String,
//     lastName:String,
//     email:String
//     mentorId:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:'Mentor'
//     }

// },{versionKey:false});
//  const Student=mongoose.model('Student',stuSchema)


// const mentSchema = mongoose.Schema({
//     firstName:String, 
//     lastName:String,
//     email:String
//     stuId:[{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:'Student'
//     }]

// },{versionKey:false});
//  const Mentor=mongoose.model('Mentor',mentSchema)
// export  {Student,Mentor}

import mongoose from 'mongoose';

const stuSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    mentorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mentor'
    }
}, { versionKey: false });

const Student = mongoose.model('Student', stuSchema);

const mentSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    stuId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }]
}, { versionKey: false });

const Mentor = mongoose.model('Mentor', mentSchema);

export default { Student, Mentor };
