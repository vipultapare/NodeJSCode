const express = require('express');
require('./config');

const product = require('./product');

const app = express();

app.use(express.json());

app.get('/list' , async(req,res) =>{
  let data  =await  product.find();
  res.send(data);
  //res.send('Hello from Vipul');
})


app.post('/create' , async(req,res) =>{
  const data = new product(req.body);
  const result = await  data.save();
  res.send(result);
  console.log(result)

})


app.delete('/delete/:_id' , async(req,res) =>{
  const id = req.params.id;
  const data = await product.deleteOne(id);
  res.send(data);
})


app.put('/update/:_id' ,  async(req,res) =>{
  const id = req.params.id;
   let data = await product.updateOne({id},{$set:req.body})
   res.send(data);
});

app.get('/search/:key' , async(req,res) =>{
   const data = await product.find(
    {
      "$or":[{"name":{$regex:req.params.key}}]
    }
   ) ;
   console.log(data);
   res.send(data);
})





app.listen(1234);