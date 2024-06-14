
const dbConnect = require('./mongoDbConnect');

const insert =async()=>{
  const db = await dbConnect();
  const result = await  db.insertMany([
    {
      name:'O 52',
      brand:'OPPO',
      price:15000,
      category:'SmartPhone'
  },
  {
    name:'M 51',
    brand:'MAX',
    price:10000,
    category:'SmartPhone'
},
{
  name:'K 21',
  brand:'karbon',
  price:5000,
  category:'SmartPhone'
}
  ]
    
  );
  
  if(result.acknowledged)
    {
      console.log("Data inserted")
    }

}

insert();