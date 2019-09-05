import sessions from'../models/sessions';
import reviews from'../models/reviews';
import users from"../models/users";

const reviewing = (req,res)=>{
    const sessionCheck=sessions.find((objectof)=>objectof.sessionId===parseInt(req.params.sessionId));
    if(!sessionCheck){
        return res.status(401).json({
            status:401,
            error:"session not found"
        })
    }

    
const user= users.find((objectof)=>objectof.id = sessionCheck.menteeId);
  
 const review={
            sessionId : sessions.length,
            mentorId : sessionCheck.mentorId,
            menteeId : parseInt(req.userData.id),
            score : req.body.score,
            menteeFullName: `${user.lastName} ${user.firstName}`,
            remark : req.body.remark
                }
                

    reviews.push(review);
    
    res.status(200).json({
        status:200,
        data: review,
    });

};

module.exports = reviewing;