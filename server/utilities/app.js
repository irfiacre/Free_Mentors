import express from'express';
const app = express();
import user from'../routes/userRoute';
import admin from'../routes/adminRoute';
import mentor from'../routes/mentorRoute';
import bodyParser from'body-parser' ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',user);
app.use('/',mentor);
app.use('/',admin);


module.exports = app;