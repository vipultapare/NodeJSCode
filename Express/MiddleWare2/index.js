const express = require('express');

const app = express();

const reqFilter = (req,res,next) =>{
  if(!req.query.age)
    {
     res.send("Please Provide age")
    }
  else if(req.query.age<18)
    {
      res.send("You cannont Access")
    }
  else
  {
    next();
  }
 
}

app.use(reqFilter);

app.get('/users', (req,res)=>{
  res.send('You are eligible for the page')
})

app.listen(1234,()=>{
  console.log('Server is running on port 1234');
})