import mentors from '../models/users';
import sessions from '../models/sessions';
import mentorSessions from '../models/sessions';


const Sessions = async(req,res)=>{
    const mentorCheck = mentors.find((object)=>object.id === parseInt(req.body.mentorId));
    if(!mentorCheck){
        return res.status(404).json({
            status: 404,
            message:"mentor not found"
        })
    }

     const newSession = {
        sessionId : sessions.length+1,
        mentorId : parseInt(req.body.mentorId),
        menteeId : req.userData.id,
        questions : req.body.questions,
        menteeEmail : req.userData.email,
        status : 'pending'
    }

    mentorSessions.push(newSession);
    sessions.push(newSession);
    
    res.status(200).json({
        status:200,
        data: newSession,
    })

};

module.exports = Sessions;