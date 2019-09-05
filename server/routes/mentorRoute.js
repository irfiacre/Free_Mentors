
import  express from 'express';
import  Authentication from '../middleware/Authentication';
import  accept from "../controllers/accept";
import  reject from "../controllers/reject";
import mentorCheck from '../middleware/mentorCheck';

const route = express.Router();

route.patch('/api/v1/sessions/:sessionId/accept',[Authentication,mentorCheck],accept);
route.patch('/api/v1/sessions/:sessionId/reject',[Authentication,mentorCheck],reject);

module.exports = route;