const  express = require('express');
const dbConnect = require('./mongoDbConnect');

const app = express();

app.use(express.json());

app.get('/',async(req,res)=>{
    let data =  await dbConnect();
    data = await data.find().toArray();
    res.send(data);
});

app.post('/',async(req,res)=>{
 let data = await dbConnect();
 let result = await data.insertOne(req.body);
  res.send(result);
})

app.put('/',async(req,res) =>{
  let data  = await dbConnect();
  let result = await data.updateOne({name:req.body.name},{$set:req.body})
  res.send(result)
})

app.delete('/:price' , async(req,res) =>{
    let data = await dbConnect();
    let result = await data.deleteOne({price:req.params.price});
    res.send(result);
})


app.listen(1234);



