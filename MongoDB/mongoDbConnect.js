
const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
async function connectDB()
{
  let result = await  client.connect();
  let eComm = result.db('E-Comm');
 return  eComm.collection('Product');

}

module.exports = connectDB;