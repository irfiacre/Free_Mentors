import pool from "../configurations/db-config";

class specificMentor{

 async mentorDisplay (req,res) {
  
    try{ 

        if(isNaN(req.params.mentorId)){
            return res.status(400).json({
                status: 400,
                error: "The Mentor id must be an integer"
            })
        }

    const mentors =`SELECT * FROM USERS WHERE is_mentor ='true'`;
        const {rows} = await pool.query(mentors)
  
    const Check = rows.find((objectof) => objectof.id === parseInt(req.params.mentorId));

        if(!Check){
        return res.status(404).json({
            status:404,
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

    }catch(error){
     return res.status(500).json({
         status: 500,
         error: error.message
                })
               
            } 
        }
    }      
        
export default new specificMentor();