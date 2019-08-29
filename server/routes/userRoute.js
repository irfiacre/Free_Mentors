import express  from'express';
import signinValidater  from'../middleware/signin';
import signin  from'../controllers/userSignin';
import signupValidater  from'../middleware/signup'; 
import signup  from'../controllers/userSignup';


const route = express.Router();


route.post('/api/v1/auth/signin',signinValidater,signin);
route.post('/api/v1/auth/signup',signupValidater,signup);



module.exports = route;