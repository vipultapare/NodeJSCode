const express = require('express');


const app = express();

//set template engine
app.set('view engine' , 'ejs');

app.get('/home',(req,res)=>{
  return res.send('Home Page')
})

app.get('/profile',(req,res)=>{
  const user = {
    name:'Vipul',
    email:'vipul@gmail.com',
    city:'Bangalore',
    skills:['JAVA','SQL','MERN'],
  }
  return res.render('profile',{user})
})

app.get('/login',(req,res) =>{
  return res.render('login');
})

app.listen(1234,()=>{
  console.log("Server is running")
})