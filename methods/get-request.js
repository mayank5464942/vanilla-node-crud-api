const moviesData=require('../data/movies.json');
const customResponse=require('../util/util');
const getRequest=(req,res)=>{
    const reqUrl=req.url;
    if(req.url==='/api/movies'){
    res.statusCode=200;
    res.setHeader('Content-type',"application/json");
    res.write(JSON.stringify(moviesData));
    res.end();
    } else if(req.url.includes('/api/movies')){
        const id=reqUrl.replace('/api/movies/','');
        const result=moviesData.filter(m=>m.id===id);
      if(result.length===0){
        customResponse(200,{message:'movie not found'},res);
      } else {
        customResponse(200,result,res);
      }
    }
    else {
        res.statusCode=200;
        res.setHeader('Content-type',"application/json");
        res.write(JSON.stringify({title:"route not found"}));
        res.end();
    }
};

module.exports=getRequest;