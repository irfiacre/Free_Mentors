import express from'express';
const app = express();
import user from'../routes/userRoute';
import bodyParser from'body-parser' ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',user);


module.exports = app;