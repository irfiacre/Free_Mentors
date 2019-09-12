import express from 'express';
import signinValidater from '../middleware/signin';
import signing from '../controllers/usersign';
import signupValidater from '../middleware/signup';
import Authorisation from '../middleware/Authentication';
import allMentors from '../controllers/mentors';
import session from '../controllers/sessions';
import sessionValidator from '../middleware/sessionValidator';

const route = express.Router();

route.post('/api/v2/auth/signin', signinValidater, signing.signin);
route.post('/api/v2/auth/signup', signupValidater, signing.signup);
route.get('/api/v2/mentors', Authorisation, allMentors.mentorsDisplay);
route.get('/api/v2/mentors/:mentorId', Authorisation, allMentors.specificMentorDisplay);
route.post('/api/v2/sessions', [Authorisation, sessionValidator], session.sessionCreate);

export default route;
