
import  mentorSession from '../models/sessions'

const validationAccept = (req,res,next)=>{

   
    const sessionAccept=mentorSession.find((objectof)=>objectof.sessionId === parseInt(req.params.sessionId));
    if(!sessionAccept){
       return res.status(401).json({
            status:401,
            error:"session not found"
        })
    }

    if (sessionAccept.status === 'accepted') {
        res.status(400).json({
          status: 400,
          error: 'This session is already accepted',
        });
      }
     
    
    if( req.userData.id !== sessionAccept.mentorId) {
    
        return res.status(403).json({
            status: 403,
            error: "This session is not yours"
        })
    }
next()
}

module.exports = validationAccept;



const validationReject = (req,res,next)=>{
 
    const sessionReject=mentorSession.find((objectof)=>objectof.sessionId === parseInt(req.params.sessionId));
    
  if(!sessionReject){
    return res.status(401).json({
        status:401,
        error:"session not found"
    })
}

  if (sessionReject.status === 'rejected') {
    return res.status(401).json({
      status: 401,
      error: 'This session is already rejected',
    });
 }

 if( req.userData.id !== sessionReject.mentorId) {
    
    return res.status(403).json({
        status: 403,
        error: "This session is not yours"
    })
}
next()


}

module.exports=validationReject;
