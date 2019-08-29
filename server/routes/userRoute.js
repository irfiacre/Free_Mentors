import express  from'express';
import signinValidater  from'../middleware/signin';
import signin  from'../controllers/userSignin';


const route = express.Router();


route.post('/api/v1/auth/signin',signinValidater,signin);



module.exports = route;