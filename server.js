const http =require('http');
import app from'./server/utilities/app';

const  server = http.createServer(app);

const Port = process.env.PORT || 5000;

app.listen(Port,()=>{
    console.log(`you are running port ${Port}`)
});
