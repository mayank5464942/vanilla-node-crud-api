const bodyParser=async (req)=>{
    return new Promise((resolve,reject)=>{
        try{
            let body="";
            req.on("data",(chunk)=>{
                body+=chunk;
            })
            req.on("end",(chunk)=>{
               resolve(JSON.parse(body));
            })
        }catch(err){
            reject(err);
        }
    });
}

module.exports=bodyParser;