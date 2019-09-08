
import  mentorSession from '../models/sessions';

const accept=(req,res)=>{
    const session=mentorSession.find((objectof)=>objectof.sessionId === parseInt(req.params.sessionId));
   
        const accepting =mentorSession.findIndex((obj)=> obj.sessionId === parseInt(req.params.sessionId));
        mentorSession[accepting].status= "accepted" ;
        
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
    }


const reject=(req,res)=>{

    const Rsession=mentorSession.find((objectof)=>objectof.sessionId === parseInt(req.params.sessionId));

    const rejecting =mentorSession.findIndex((obj)=> obj.sessionId === parseInt(req.params.sessionId));
    mentorSession[rejecting].status= "rejected" ;
    
    const rejectSession = {
            sessionId : Rsession.sessionId,
            mentorId : Rsession.mentorId,
            menteeId : req.userData.id,
            questions : Rsession.questions,
            menteeEmail : req.userData.email,
            status:"rejected",
    }
    mentorSession.push(rejectSession);
    
    return res.status(200).json({
        status: 200,
        data: rejectSession,
    
    });
  }

    export { reject, accept};