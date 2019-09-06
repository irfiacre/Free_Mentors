import sessions from'../models/sessions';
import  mentorSession from '../models/sessions'

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

     if( req.userData.id === session.mentorId) {
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

    } else {
        return res.status(403).json({
            status: 403,
            error: "This session is not yours"
        })
    }

}

module.exports = rejectingSession;