

const connectDB = require('./connection');

const main = async() =>{
  let data = await connectDB();
  data = await data.find().toArray();
  console.warn(data);
}

main();
