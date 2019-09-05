
import  mentorSessions from '../models/sessions';

const sessionsDisplay = (req,res) =>{
    if (req.userData.is_mentor) {
        const mentor = mentorSessions.find((Mobj)=> Mobj.mentorId === parseInt(req.userData.id) )
           return res.status(200).json({
            status:200,
            data: mentorSessions.filter((obj)=> obj.mentorId === mentor.mentorId),
        }) 
    }

   

};


module.exports = sessionsDisplay;