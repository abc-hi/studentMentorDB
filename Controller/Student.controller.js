    // import { Student, Mentor } from '../Models/Student.Schema.js';


    // export const createStudent =async(req,res)=>{
    //     try {
    //         const newStudent=new Student(req.body)
    //         await newStudent.save();
    //         res.status(200).json({data:newStudent})
    //     } catch (error) {
    //         console.log(error);
    //     }

    // }
    // Student.controller.js
import StudentSchema from "../Models/Student.Schema.js";


export const createStudent = async (req, res) => {
    try {
        // const newStudent = req.body
        const { firstName,lastName,email } = req.body;
        const obj = await StudentSchema.create({
          firstName,
          lastName,
          email
          });
        // await newStudent.save();
       
    
if (user) {
      res.status(201).json({
        status:"success"
      });
    } else {
      res.status(400);
      throw new Error("failed to create");
    }
        // res.status(200).json({ data: newStudent });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
//get studentdetails 
export const getStudentDetails = async(req,res)=>{
    try{
        const student=await Student.find()
    res.status(200).json({data:student})}
    catch(error)
    {
        console.log(error);
    }
}

//get studentdetails byid

export const getStudentDetailsById = async (req, res) => {
    try {
        const stuId = req.params.id;
        const student = await Student.findById(stuId);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json({ data: student });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
export const assignStudentToMentor = async (req, res) => {
    try {
        const { studentId, mentorId } = req.body;
        const student = await Student.findByIdAndUpdate(studentId, { mentorId: mentorId }, { new: true });
        res.status(200).json({ message: 'Student assigned to mentor successfully', student: student });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};// In Student.controller.js
export const getStudentsByMentor = async (req, res) => {
    try {
        const mentorId = req.params.mentorId;
        const students = await Student.find({ mentorId: mentorId });
        res.status(200).json({ data: students });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
// In Student.controller.js
export const getPreviousMentor = async (req, res) => {
    try {
        const studentId = req.params.studentId;
        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        const previousMentor = student.previousMentor; // Assuming you have a field named 'previousMentor' in the student schema
        res.status(200).json({ data: previousMentor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
