const {MongoClient} = require('mongodb');
const url =  'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function connectDB(){
 let result = await client.connect();
 let college = result.db('College');
 return college.collection('Student');
} 

module.exports  = connectDB;