const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
//client: all data stored in the client after fetching all data from it.

async function connect()
{
  let result = await  client.connect();
  // It connect the client and it gives promise 

  let eComm = result.db('E-Comm');
 return  eComm.collection('Product');
  // let response = await productCollection.find({name:'M 40'}).toArray();
  // console.log(response);
}

// connect().then((resp)=>{
//  resp.find({name:'M 40'}).toArray().then((data)=>{
//      console.warn(data);
//  })
// })

// or
const main = async() =>{
   let data = await connect();
   data = await data.find().toArray();
   console.log(data);
}

main();

// console.log(getData());