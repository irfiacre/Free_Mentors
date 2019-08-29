import mentors from '../models/mentors';

const mentorDisplay = (req,res)=>{
    const Check = mentors.find((objectof) => objectof.mentorId === parseInt(req.params.mentorId));
    if(!Check){
        return res.status(401).json({
            status:401,
            message: "Mentor not found"
        })
    }
    
    res.status(200).json({
        status: 200,
    data: Check,
    })
}

module.exports=  mentorDisplay;