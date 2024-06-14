const express = require('express');
const http = require('http');

const app = express();

app.get('/',(req,resp) =>{
  return resp.send("Hello  Home Page");
});

app.get('/about',(req , resp)=>{
  return resp.send("Hello About Page"+ ` hey ${req.query.name}`);
});


app.listen(8000 , () => console.log("Server is Running"));

// const myServer = http.createServer(app);
// myServer.listen(8000, ()=> console.log("Server is Strating"));
