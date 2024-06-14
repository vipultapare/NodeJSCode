const express = require('express');
const reqFilter = require('./middleware');
const app = express();
const route = express.Router();



route.use(reqFilter);


app.get('/users',reqFilter, (req,res)=>{
  res.send('You are eligible for the page')
})

app.get('/',(req,res)=>{
  res.send("Home Page");
})

route.get('/about', (req,res)=>{
  res.send("About Page");
})

route.get('/contact', (req,res)=>{
  res.send("Contact Page");
})

app.use('/',route);




app.listen(1234,()=>{
  console.log("Server is running");
}
  
)