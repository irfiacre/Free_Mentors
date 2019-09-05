import express from'express';

const app = express();
import user from'../routes/userRoute';
import admin from'../routes/adminRoute';
import mentor from'../routes/mentorRoute';
import bodyParser from'body-parser' ;
import swaggerUI from 'swagger-ui-express';
import swaggerDoc from '../../swagger.json'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',user);
app.use('/',mentor);
app.use('/',admin);
app.use('/doc',swaggerUI.serve, swaggerUI.setup(swaggerDoc));


module.exports = app;