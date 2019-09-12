
import Joi from 'joi';

const signupValidator = (req,res,next)=>{
    const schema = {
        firstName: Joi.string().alphanum().min(3).max(30).required(),
        lastName: Joi.string().alphanum().min(3).max(30).required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
        email: Joi.string().email({ minDomainSegments: 2 }),
        address :  Joi.string().min(3).max(30).required(),
        bio :  Joi.string().min(0).max(300).required(),
        occupation :  Joi.string().min(3).max(30).required(),
        expertise :  Joi.string().min(3).max(30).required(),
     
    }
    const {error} = Joi.validate(req.body,schema);
    if (error){
        return res.status(422).json({
            status:422,
            error: error.details[0].message
        });
    }
    next();
}

module.exports = signupValidator;