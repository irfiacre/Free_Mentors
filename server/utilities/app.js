import express from 'express';
import bodyParser from 'body-parser';
import swaggerUI from 'swagger-ui-express';
import user from '../routes/userRoute';
import admin from '../routes/adminRoute';
import mentor from '../routes/mentorRoute';
import swaggerDoc from '../../swagger.json';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', user);
app.use('/', admin);
app.use('/', mentor);
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

// app.use((req, res) => res.status(400).json({
//   status: 400,
//   error: 'PAGE NOT FOUND',

// }));

module.exports = app;
