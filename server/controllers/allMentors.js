
import allusers from '../models/users';

const mentorsDisplay = (req,res) => {
     const check = [];
    allusers.forEach(mentor => {
        if(mentor.is_mentor === true){
            
            let mentorData ={
                firstName: mentor.firstName ,
                lastName: mentor.lastName,
                email: mentor.email, 
                address: mentor.address,
                bio: mentor.bio,
                occupation: mentor.occupation,
                expertise: mentor.expertise,

            }
            check.push(mentorData);
        }   
    })
   
    
    //     let mentorArray = [];
    //     allusers.forEach(mentor => {
           
    //         mentorArray.push(mentorData);
    //     });

        
    // });
return res.status(200).json({
    status: 200,
    data: check,
})
};
module.exports=  mentorsDisplay;