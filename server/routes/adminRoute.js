
import express  from 'express';
import UserToMentor from '../controllers/userToMentor';
import Authentication from '../middleware/Authentication';
import adminCheck  from '../middleware/adminCheck';
import reviewDelete from '../controllers/deleteReview'

const route = express.Router();

route.patch('/api/v1/user/:userId',[Authentication, adminCheck],UserToMentor);
route.delete('/api/v1/sessions/:sessionId/review',[Authentication, adminCheck],reviewDelete);

module.exports = route;