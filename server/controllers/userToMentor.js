
import pool from '../configurations/db-config';

const changeUserToMentor = async(req,res)=>{
    try{
        const mentors ='SELECT * FROM USERS'
        const {rows} = await pool.query(mentors)
        
    const checking = rows.find((objectof) => objectof.id === parseInt(req.params.userId));
     if(!checking){
         return res.status(404).json({
             status:404,
             message:"user is not found"
         })
     }
     console.log(checking);
     
     if(checking.is_mentor === true){
         return res.status(409).json({
             status: 409,
             message:"User is arleady mentor"
         })
        }
     
     const objIndex= rows.findIndex((obj) => obj.id === parseInt(req.params.userId));
     rows[objIndex].is_mentor = true;  

     const newInfo= `UPDATE users SET is_mentor=true WHERE id = ${req.params.userId} `
     const {row} = await pool.query(newInfo)
     console.log(row);

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