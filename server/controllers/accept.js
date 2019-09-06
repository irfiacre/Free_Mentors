
import  sessions from '../models/sessions';
import  mentorSession from '../models/sessions'

const acceptingSession=(req,res)=>{
    const session=sessions.find((objectof)=>objectof.sessionId === parseInt(req.params.sessionId));
    if(!session){
        return res.status(401).json({
            status:401,
            error:"session not found"
        })
    }

    if (session.status === 'accepted') {
        return res.status(400).json({
          status: 400,
          error: 'This session is already accepted',
        });
      }
     
      if( req.userData.id === session.mentorId) {
        const accepting =sessions.findIndex((obj)=> obj.sessionId === parseInt(req.params.sessionId));
        sessions[accepting].status= "accepted" ;
        
        const acceptSession = {
                sessionId : session.sessionId,
                mentorId : session.mentorId,
                menteeId : req.userData.id,
                questions : session.questions,
                menteeEmail : req.userData.email,
                status:"accepted",
        }
        mentorSession.push(acceptSession);
        
        return res.status(200).json({
            status: 200,
            data: acceptSession,
        
        });
    } else {
        return res.status(403).json({
            status: 403,
            error: "This session is not yours"
        })
    }



}

module.exports = acceptingSession;