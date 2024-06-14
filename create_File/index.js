const { dir } = require('console');
const fs = require('fs');
const path  = require('path');

const dirPath = path.join(__dirname,'crud');
const filepath = `${dirPath}\apple.txt` ;
fs.writeFileSync(filepath, 'This is the Apple file');

fs.readFileSync(filepath,(err,item)=>{

  console.log(item);

})


fs.appendFile(filepath,'and file name is apple with red',(err)=>{
  if(!err)
    {
      console.log("Updated");
    }
})


fs.rename(filepath , `${dirPath}\fruit.txt`,(err)=>{
  if(!err)
    {
      console.log("Updates the file")
    }
})


fs.unlinkSync(`${dirPath}\apple.txt`)