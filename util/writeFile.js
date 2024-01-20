const fs=require('fs');
const path=require('path');

const filePath=path.join(__dirname,"..","data","movies.json");
const writeFile=(data)=>{
fs.writeFileSync(filePath,JSON.stringify(data));
}

module.exports=writeFile;