import  bcrypt from 'bcrypt';
import  users from '../models/users';

const changeUserToMentor = async(req,res)=>{
    const checking = users.find((objectof) => objectof.id === parseInt(req.params.userId));
     if(!checking){
         return res.status(404).json({
             status:404,
             message:"user is not found"
         })
     }
     if(checking.is_mentor === true){
         return res.status(200).json({
             status: 200,
             message:"User is arleady mentor"
         })

     }
     
     const objIndex= users.findIndex((obj) => obj.id === parseInt(req.params.userId));
     users[objIndex].is_mentor = true;  

     const newMentor = {
        id:users.length+1,
        firstName : checking.firstName ,
        lastName : checking.lastName ,
        email :  checking.email,
        password :  await bcrypt.hash(checking.password,10),
        address :  checking.address,
        bio :  checking.bio,
        occupation :  checking.occupation,
        expertise :  checking.expertise,
        is_mentor: checking.is_mentor,
        is_admin: checking.is_admin,

     }
     

     users.push(newMentor);
     res.status(200).json({
         status:200,
         message:"User account changed to mentor",
        
     });
     console.log(users);
     

}


 module.exports = changeUserToMentor;