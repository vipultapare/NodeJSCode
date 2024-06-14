const express = require('express');
const dbConnect = require('./dbConnect');
const app = express();


// MiddleWare....................

app.use(express.json());

// Read Data from Database.......

app.get('/' , async(req,res)=>{
    let data = await dbConnect();
    let result = await data.find().toArray();
    res.send(result);
});


// Insert Data in Database........

app.post('/',async(req,res) =>{
   let data = await dbConnect();
   let result = await data.insertOne(req.body);
   res.send(result);
})

// Update Data in Database.........

app.put('/:city',async(req,res)=>{
  let data = await dbConnect();
  let result = await data.updateOne({city:req.params.city},{$set:req.body});
  res.send(result);
})

//Delete Data in Database..........

app.delete('/:city',async(req,res)=>{
  let data = await dbConnect();
  let result = await data.deleteOne({city:req.params.city});
  res.send(result);
})

app.listen(1234);