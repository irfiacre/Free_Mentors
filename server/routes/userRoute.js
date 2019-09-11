import express  from'express';
import signinValidater  from'../middleware/signin';
import signin  from'../controllers/userSignin';
import signupValidater  from'../middleware/signup'; 
import signup  from'../controllers/userSignup';
import Authorisation  from'../middleware/Authentication';
import allMentors from '../controllers/allMentors';
import specificMentor from '../controllers/specificMentor';


const route = express.Router();

route.post('/api/v1/auth/signin',signinValidater,signin.signin);
route.post('/api/v1/auth/signup',signupValidater,signup.signup);
route.get('/api/v1/mentors',Authorisation,allMentors.MentorsDisplay);
route.get('/api/v1/mentors/:mentorId',Authorisation, specificMentor.MentorDisplay);

export default route;
