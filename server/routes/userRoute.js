import express from 'express' ;
import Authorisation from '../middleware/Authentication';
import allMentors from '../controllers/allMentors';

const route = express.Router();

route.get('/api/v1/mentors', Authorisation, allMentors.MentorsDisplay);

export default route;
