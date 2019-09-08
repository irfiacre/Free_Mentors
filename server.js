import http from 'http';
import app from './server/utilities/app';

const  server = http.createServer(app);

const Port = process.env.PORT || 7000;

app.listen(Port,()=>{
    console.log(`you are running port ${Port}`)
});

