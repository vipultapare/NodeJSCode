const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function connectDB()
{
  let result = await client.connect();
  let it = result.db('IT');
  return it.collection('MERN');
}

module.exports = connectDB;