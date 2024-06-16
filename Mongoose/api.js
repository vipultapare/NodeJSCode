const express = require('express');
require('./config');
 const Product = require('./product');

 const app = express();


 // data will get in script format to convert into json Middle ware is use.
 app.use(express.json);

app.get('/' , (req,res) =>{
  res.send('Hello World 1');
})

 app.post('/create' , async (req,res) =>{
   const data = new Product(req.body);
   const result = await data.save();
  res.send("Create Page");
 })


 app.listen(5001);