const mongoose = require('mongoose');

// const main = async() =>{
 mongoose.connect("mongodb://127.0.0.1:27017/db");

  const productSch = new mongoose.Schema({
    name:String,
    price:Number
    
  });

  //Modal - Connect node js with DB

  const productModel = mongoose.model('sample',productSch);

  // let data = new productModel({
  //   name:'Y-1200',price:10000

  // });

  // let result =  await data.save();
  // console.log(result);

  const Insertdata = async () => {
    const data = await productModel.create({name:'Vipul', price:10000});

    console.log(data);
  }

  Insertdata();

//}

// main();