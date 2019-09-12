
import express  from 'express';
import allMentors from '../controllers/mentors';
import Authentication from '../middleware/Authentication';
import adminCheck  from '../middleware/adminCheck';

const route = express.Router();

route.patch('/api/v2/user/:userId',[Authentication, adminCheck],allMentors.changeUserToMentor);

module.exports = route;