
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/samples");


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
    name:'Vikram',
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





//insert();

update();