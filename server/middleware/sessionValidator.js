import Joi from'joi';

const sessionValid= (req,res,next)=>{
    
    const schema = {

        mentorId: Joi.number().integer().required(),
        questions: Joi.string().min(3).required()
       
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

    module.exports = sessionValid;