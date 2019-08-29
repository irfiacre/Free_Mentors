import bcrypt  from 'bcrypt';
import jwt  from 'jsonwebtoken';
import users from '../models/users';


const signin = async(req,res)=>{
    const user = users.find( objectof=>objectof.email === req.body.email);
    if(!user){
        return res.status(404).json({
            status:404,
            error: "Email not found"
            
            })
    }
    const password = await bcrypt.compare(req.body.password,user.password);
        if(!password){
            return res.status(404).json({
                status: 404,
                error: "Password not found"
            })
        }
    const token = jwt.sign({
        id: user.id,
        email: req.body.email
    },'jwtprivatekey');
     
    res.status(200).json({
        status: 200,
        message: "User is successfully logged in",
        data:{
            token
        }
    })
};

module.exports = signin;