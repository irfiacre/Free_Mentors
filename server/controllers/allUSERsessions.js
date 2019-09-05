
import userSessions from '../models/sessions';

const sessionsDisplay = (req,res) =>{
    if (req.userData.is_mentor) {
        
        const mentor = userSessions.find((Mobj)=> Mobj.mentorId === parseInt(req.userData.id))
           return res.status(200).json({
            status:200,
            data: userSessions.filter((obj)=> obj.mentorId === mentor.mentorId),
        }) 
        
    } else {
        const user = userSessions.find((sobj)=> sobj.menteeId === parseInt(req.userData.id) )
        return res.status(200).json({
            status:200,
            data: userSessions.filter((Sobj)=>Sobj.menteeId == user.menteeId)
        })
    }

};



module.exports = sessionsDisplay;


