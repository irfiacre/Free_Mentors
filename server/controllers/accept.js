const sessions = require('../models/sessions');

const acceptingSession=(req,res)=>{
    const session=sessions.find((objectof)=>objectof.sessionId === parseInt(req.params.sessionId));
    if(!session){
        return res.status(401).json({
            status:401,
            error:"session not found"
        })
    }

    if (session.status === 'accepted') {
        return res.status(200).json({
          status: 200,
          error: 'This session is already accepted',
        });
     
    }

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


sessions.push(acceptSession);

return res.status(200).json({
    status: 200,
    data: acceptSession,

});

}

module.exports = acceptingSession;