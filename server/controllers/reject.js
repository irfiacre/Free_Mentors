import sessions from'../models/sessions';
import  mentorSession from '../models/mentorSessions'

const rejectingSession=(req,res)=>{
  const session=sessions.find((objectof)=>objectof.sessionId === parseInt(req.params.sessionId));

if(!session){
        return res.status(401).json({
            status:401,
            error:"session not found"
        })
    }

if (session.status === 'rejected') {
        return res.status(401).json({
          status: 401,
          error: 'This session is already rejected',
        });
     }
const accepting =sessions.findIndex((obj)=> obj.sessionId === parseInt(req.params.sessionId));
sessions[accepting].status= "rejected" ;

const rejectSession = {
        sessionId : session.sessionId,
        mentorId : session.mentorId,
        menteeId : req.userData.id,
        questions : session.questions,
        menteeEmail : req.userData.email,
        status:"rejected",
}
mentorSession.push(rejectSession);

return res.status(200).json({
    status: 200,
    data: rejectSession,

});

}

module.exports = rejectingSession;