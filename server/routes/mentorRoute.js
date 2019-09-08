
import  express from 'express';
import  Authentication from '../middleware/Authentication';
import { accept,reject } from "../controllers/Accept-Reject";
// import  reject from "../controllers/reject";
import mentorCheck from '../middleware/mentorCheck';
import sessionValidate from '../middleware/sessionValidate'


const route = express.Router();

route.patch('/api/v1/sessions/:sessionId/accept',[Authentication,mentorCheck,sessionValidate],accept);
route.patch('/api/v1/sessions/:sessionId/reject',[Authentication,mentorCheck,sessionValidate],reject);

export default route;