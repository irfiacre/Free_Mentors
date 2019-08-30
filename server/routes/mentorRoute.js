
import  express from 'express';
import  Authentication from '../middleware/Authentication';
import  accept from "../controllers/accept";
import  reject from "../controllers/reject";
import mentorSessions from '../controllers/allMentorSessions';
const route = express.Router();

route.patch('/api/v1/sessions/:sessionId/accept',Authentication,accept);
route.patch('/api/v1/sessions/:sessionId/reject',Authentication,reject);
route.get('/api/v1/Sessionz',Authentication,mentorSessions);

module.exports = route;