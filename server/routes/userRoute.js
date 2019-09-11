import express  from'express';
import signinValidater  from'../middleware/signin';
import signing  from'../controllers/usersign';
import signupValidater  from'../middleware/signup';
import Authorisation  from'../middleware/Authentication';
import allMentors from '../controllers/mentors';
const route = express.Router();

route.post('/api/v1/auth/signin',signinValidater,signing.signin);
route.post('/api/v1/auth/signup',signupValidater,signing.signup);
route.get('/api/v1/mentors',Authorisation,allMentors.mentorsDisplay);
route.get('/api/v1/mentors/:mentorId',Authorisation,allMentors.specificMentorDisplay );

export default route;
