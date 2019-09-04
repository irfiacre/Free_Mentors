const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const users= require('../models/users');

const signup = async(req,res)=>{
    const user = users.find(objectof=>objectof.email === req.body.email);
    if(user){
        return res.status(409).json({
            status:409,
            error:"Email already exist"
        })
    }
    const newUser={
        id:users.length+1,
        firstName : req.body.firstName ,
        lastName : req.body.lastName ,
        email :  req.body.email,
        password :  await bcrypt.hash(req.body.password,10),
        address :  req.body.address,
        bio :  req.body.bio,
        occupation :  req.body.occupation,
        expertise :  req.body.expertise,
        is_mentor: req.body.is_mentor || false,
        is_admin: req.body.is_admin || false

    }
    

    const token = jwt.sign({
        id: newUser.id,
        email : newUser.email,
        // is_mentor: newUser.is_mentor,  
        is_admin: newUser.is_admin
    },'jwtprivatekey');
   
    

    users.push(newUser);

    res.status(201).json({
        status:201,
        message:"user successfuly created",
        data:{
            token,
            message:"user successfuly created"
            
        }    
    })
    console.log(newUser);
}


module.exports = signup;




