
import express  from 'express';
import UserToMentor from '../controllers/userToMentor';
import Authentication from '../middleware/Authentication';
import adminCheck  from '../middleware/adminCheck';

const route = express.Router();

route.patch('/api/v1/user/:userId',[Authentication, adminCheck],UserToMentor);

module.exports = route;