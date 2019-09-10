import express  from'express';
import signinValidater  from'../middleware/signin';
import signIn  from'../controllers/userSignin';
import signupValidater  from'../middleware/signup'; 
import signup  from'../controllers/userSignup';
import Authorisation  from'../middleware/Authentication';
import allMentors from '../controllers/allMentors';
import specificMentor from '../controllers/specificMentor';
import sessionValidator from '../middleware/sessionValidator';
import session from '../controllers/session';
import userSessions from '../controllers/allsessions';
import userReview from '../controllers/review';
import reviewValidater from '../middleware/reviewValidater';

const route = express.Router();
route.post('/api/v1/auth/signin', signinValidater, signin);
route.post('/api/v1/auth/signup', signupValidater, signup);
route.get('/api/v1/mentors', Authorisation, allMentors.MentorsDisplay);
route.get('/api/v1/mentors/:mentorId', Authorisation, specificMentor);
route.post('/api/v1/sessions', [Authorisation, sessionValidator], session);
route.get('/api/v1/sessions', Authorisation, userSessions);
route.post('/api/v1/sessions/:sessionId/review', [Authorisation, reviewValidater], userReview);



export default route;
