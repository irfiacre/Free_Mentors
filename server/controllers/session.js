import mentors from '../models/mentors';
import sessions from '../models/sessions';
import mentorSessions from '../models/mentorSessions';


const Sessions = async(req,res)=>{
    const mentorCheck = mentors.find((object)=>object.mentorId === req.body.mentorId);
    if(!mentorCheck){
        return res.status(404).json({
            status: 404,
            message:"mentor not found"
        })
    }
    const newSession = {
        sessionId : sessions.length+1,
        mentorId : req.body.mentorId,
        menteeId : req.userData.id,
        questions : req.body.questions,
        menteeEmail : req.userData.email,
        status : 'pending'
    }

    mentorSessions.push(newSession);
    
    res.status(200).json({
        status:200,
        data: newSession,
    })

};

module.exports = Sessions;