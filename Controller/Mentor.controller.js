
// import { Mentor } from '../Models/Student.Schema.js';

export const createMentor = async (req, res) => {
    try {
        const newMentor = new Mentor(req.body);
        await newMentor.save();
        res.status(200).json({ data: newMentor });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
export const  getAllMentorDetails = async (req,res)=>{
    try{
        const mentor =await Mentor.find()
        res.status(200).json({data:mentor})
    }
    catch(error)
    {
        res.status(500).json({error:"Error in get student"})
    }
}



import  Mentor  from '../Models/Student.Schema.js'; // Import Mentor model

export const getassignMentor = async (req, res) => {
    try {
        const { id } = req.params;  
        const mentor = await Mentor.findById(id).populate('mentorId'); // Corrected 'mentorid' to 'mentorId'
        res.status(200).json({
            message: 'Successfully fetched',
            Mentor: mentor.firstName, // Changed 'student' to 'mentor'
            Student: mentor.mentorId.firstName // Corrected 'student' to 'mentor', and 'mentorId' to 'mentorId'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const assignMentorToStudent = async (req, res) => { // Swapped 'res' and 'req'
    try {
        const { studentId } = req.params;
        const { mentorId } = req.body;
        const student = await Student.findByIdAndUpdate(
            studentId,
            { mentor: mentorId }, // Corrected 'mentor' to 'mentorId'
            { new: true }
        );
        res.status(200).json({
            message: 'Assigned a student successfully',
            student
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
