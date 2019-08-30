
import  mentorSessions from '../models/mentorSessions';

const sessionsDisplay = (req,res) =>{
    return res.status(200).json({
        status:200,
        data: mentorSessions,
    })
};


module.exports = sessionsDisplay;