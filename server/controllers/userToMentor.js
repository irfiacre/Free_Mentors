
import pool from '../configurations/db-config';

const changeUserToMentor = async(req,res)=>{
    try{
        if(isNaN(req.params.userId)){
            return res.status(400).json({
                status: 400,
                error: "The userId must be an integer"
            })
        }

        const mentors =`SELECT * FROM USERS WHERE id = ${req.params.userId}`
        const {rows:[checking]} = await pool.query(mentors) 
       
        if(!checking){
         return res.status(404).json({
             status:404,
             message:"user is not found"
         })
     }
    
     if(checking.is_mentor === true){
         return res.status(422).json({
             status: 422,
             message:"User is arleady mentor"
         })
        }
     const newInfo= `UPDATE users SET is_mentor=true WHERE id = ${req.params.userId} `
     const {row} = await pool.query(newInfo)

     res.status(200).json({
         status:200,
         message:"User account changed to mentor",
        
     });
    }catch(error){
        return res.status(500).json({
            status: 500,
            error: error.message
        })
       
    }    

}


 export default changeUserToMentor;