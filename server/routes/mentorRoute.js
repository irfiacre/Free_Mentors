
import  express from 'express';
import  Authentication from '../middleware/Authentication';
import sessions from "../controllers/sessions";
import mentorCheck from '../middleware/mentorCheck';


const route = express.Router();

route.patch('/api/v2/sessions/:sessionId/accept',[Authentication, mentorCheck], sessions.acceptSession);
route.patch('/api/v2/sessions/:sessionId/reject',[Authentication, mentorCheck], sessions.rejectSession);

export default route;