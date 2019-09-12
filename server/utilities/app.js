import express from'express';

const app = express();
import user from'../routes/userRoute';
import admin from'../routes/adminRoute';
import bodyParser from'body-parser' ;
import swaggerUI from 'swagger-ui-express';
import swaggerDoc from '../../swagger.json'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',user);
app.use('/',admin);
app.use('/doc',swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.use(function(req,res,next){
    return res.status(400).json({
        status:400,
        error:"BAD REQUEST"
        
    })
})

module.exports = app;