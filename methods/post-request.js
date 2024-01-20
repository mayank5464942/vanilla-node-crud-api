const { v4: uuidv4 } = require('uuid');
const bodyParser = require('../util/bodyParser');
const writeFile = require('../util/writeFile');
const customResponse = require('../util/util');
const moviesData=require("../data/movies.json")
const postRequest=async (req,res)=>{
   const body=await bodyParser(req);
    const id=uuidv4();
    body.id=id;
    moviesData.push(body);
    writeFile(moviesData);
    customResponse(201,{title:'written'},res);
}

module.exports=postRequest;