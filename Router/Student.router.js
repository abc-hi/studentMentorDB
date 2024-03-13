// import express from 'express';
// import { createStudent } from '../Controller/Student.controller.js';
// // import { Student, Mentor } from '../Models/Student.Schema.js';



// const router = express.Router()
// router.post('/create-stu',createStudent)  


// export default router;

// Student.router.js
import express from 'express';
import { createStudent, getStudentDetails, getStudentDetailsById,assignStudentToMentor,getStudentsByMentor,getPreviousMentor} from '../Controller/Student.controller.js';
import { createMentor } from '../Controller/Mentor.controller.js';

const router = express.Router();
router.post('/create-stu', createStudent);
// router.post('/createMentor', createMentor);
router.get('/getstudentdetails',getStudentDetails);
router.get('/getStudetailsbyid', getStudentDetailsById)
router.get('/assignstudenttomentor',assignStudentToMentor)
router.get('/getstudentbymentor',getStudentsByMentor)
router.get('/getpreviousbymentor',getPreviousMentor)
export default router;
