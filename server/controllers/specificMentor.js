import mentors from '../models/users';

const mentorDisplay = (req,res)=>{
    const Check = mentors.find((objectof) => objectof.id === parseInt(req.params.mentorId));

    if(!Check){
        return res.status(401).json({
            status:401,
            message: "Mentor not found"
        })
    }

        if(Check.is_mentor){
            
            let mentorData ={
                firstName : Check.firstName ,
                lastName : Check.lastName,
                email : Check.email, 
                address : Check.address,
                bio : Check.bio,
                occupation : Check.occupation,
                expertise : Check.expertise,

            }

            return res.status(200).json({
                status: 200,
                     data: mentorData,
                    })
              } else {
                  return res.status(400).json({
                      status: 400,
                      error: 'This is not a mentor'
                     })
              } 
        }
         


module.exports=  mentorDisplay;