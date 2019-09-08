
import  express from 'express';
import  Authentication from '../middleware/Authentication';
import { accept,reject } from "../controllers/Accept-Reject";
import mentorCheck from '../middleware/mentorCheck';
import {validationAccept,validationReject} from '../middleware/sessionValidate'


const route = express.Router();

route.patch('/api/v1/sessions/:sessionId/accept',[Authentication,mentorCheck,validationAccept],accept);
route.patch('/api/v1/sessions/:sessionId/reject',[Authentication,mentorCheck,validationReject],reject);

export default route;