const dbConnect = require('./mongoDbConnect');

const deleteData = async() =>{
     let data = await dbConnect();
     let result = await data.deleteMany({
      brand:'OPPO'
     })

     if(result.acknowledged)
      {
        console.log('Delete Sucess');
      }

}

deleteData();