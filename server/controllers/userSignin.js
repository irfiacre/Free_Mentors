import bcrypt  from 'bcrypt';
import '@babel/plugin-transform-regenerator';
import '@babel/polyfill';
import jwt  from 'jsonwebtoken';
import pool from '../configurations/db-config';

class signingIn{

    async signin (req,res){
    try{
      
    const emailGet = 'SELECT email FROM users WHERE email = $1;';
    const {rows: [emailGot]} = await pool.query(emailGet,[req.body.email]);
    
    if(!emailGot){
        return res.status(422).json({
         status:422,
            error:"Invalid email"
        })
    }

    const passwordGet = 'SELECT * FROM users  WHERE email = $1;';
    const {rows:[passwordGot]} = await pool.query(passwordGet, [req.body.email] );

    const password = await bcrypt.compare(req.body.password, passwordGot.password);
      if(!password){
            return res.status(422).json({
                status: 422,
                error: "Invalid Password"
            })
        }
        
    const token = jwt.sign({
        id: passwordGot.id,
        email: passwordGot.email,
        is_admin :passwordGot.is_admin,
        is_mentor : passwordGot.is_mentor
    },'jwtprivatekey');
     
    res.status(200).json({
        status: 200,
        message: "User is successfully signed in",
        data:{
            token
        }
    })
}catch(error){
    return res.status(500).json({
        status: 500,
        error: error.message
    }) 
}

}
}

export default new signingIn();