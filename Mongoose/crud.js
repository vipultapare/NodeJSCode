
const mongoose = require('mongoose');
const express = require('express');
mongoose.connect("mongodb://127.0.0.1:27017/samples");


const app = express();


const schema =  new mongoose.Schema({
  name:String,
  price:Number,
  brand:String,
  category:String

});

const Sample = mongoose.model('sam',schema);


// Insert the data
const insert = async() =>{
  
  
  const data = await  Sample.create({
    name:'Tushar',
    price:20000,
    brand:'Porche',
    category:'Car'
  })

  console.log(data);
}


// Update the data

const update = async() =>{
   const data =  await Sample.updateOne({
    name:'Vikram'
   },{$set:{price:12000}})

   console.log(data);
}
 

// Delete the Data

const dlt = async()=>{
  const data = await Sample.deleteOne({
       name:'Virat'
  })

  console.log(data);
}


// Find in Data

const find = async()=>{
  const data = await Sample.find({
    name:'Tushar'
  })

  console.log(data[0].category);
}




app.get('/' , (req, res) =>{
   res.send('Hello World');
})

app.listen(5001);





//insert();

//update();

//dlt();

// find();