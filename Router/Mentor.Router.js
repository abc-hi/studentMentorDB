import { createMentor, getassignMentor,assignMentorToStudent } from '../Controller/Mentor.controller.js';

import express from 'express';


const router = express.Router();

router.post('/createMentor', createMentor);
router.post('/stu-ment')
router.get('/getassignmentor/:id',getassignMentor)
router.put('/assign-mentor/:studentId', assignMentorToStudent)


export default router;