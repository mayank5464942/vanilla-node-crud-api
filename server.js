const http=require('http');
const getRequest = require('./methods/get-request');
const postRequest=require('./methods/post-request');
require('dotenv').config();

const PORT=process.env.PORT||4000;

const server=http.createServer((req,res)=>{
    const method=req.method;
    const apiPath=req.url;
    if(method=='GET'){
        getRequest(req,res);
    } else if (method=='POST'){
        postRequest(req,res);
    } else if(method=='PUT'){

    } else if(method=='DELETE'){

    } else {
        res.statusCode=200;
        res.setHeader('Content-type',"application/json");
        res.write(JSON.stringify({title:"route not found"}));
        res.end();
    }
   
})

server.listen(PORT,()=>{
    console.log(`server started listening on ${PORT}`);
})