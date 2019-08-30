import Joi from 'joi';

const reviewValid = (req,res,next)=>{

    const schema = {
        score: Joi.number().integer().min(1).max(5).required(), 
        remark : Joi.string().min(1).required()
            }

    const {error} = Joi.validate(req.body,schema);
       if (error){
           return res.status(400).json({
               status:400,
               error: error.details[0].message
           });
        }

      next();     
}

module.exports = reviewValid;
