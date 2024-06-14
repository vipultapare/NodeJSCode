const dbConnect = require('./mongoDbConnect');

const updateData = async()=>{
     let data = await dbConnect();
     let result = await data.updateMany({
      brand:'OPPO'
     },
    {
      $set:{price:25,name:'O 225'}
    });


    if(result.acknowledged)
      {
        console.log("Update sucess");
      }

    
}

updateData();