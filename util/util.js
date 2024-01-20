 const customResponse=(code,obj,res)=>{
    res.statusCode=code;
    res.setHeader('Content-type',"application/json");
    res.write(JSON.stringify(obj));
    res.end();
}

module.exports=customResponse;