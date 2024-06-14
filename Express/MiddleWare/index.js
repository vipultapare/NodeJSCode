const express = require('express');
const user = require('./UsersINFO.json');
const fs = require('fs');
const app  = express();
const PORT = 1234;


//middle Ware
app.use(express.urlencoded({extended:false}));

app.use((req,res,next) =>{
  console.log("Hello from middleware 1");
  next();
 
});

// Routes
app.get('/api/users',(req,res)=>{
  return res.json(user);
});

app.get('/users',(req,res)=>{
  const html = `
  <ul>
  
   ${
    user.map((user)=>
     `<li>
      ${user.first_name}
    </li>`
    ).join("")
   }
  </ul>
  `;

  res.send(html);
});

app.get('/api/users/:id' , (req,res)=>{
  const id = Number(req.params.id);
  const u = user.find(us => us.id === id );
  return res.json(u);
});

app.post('/api/users', (req,res)=>{
  const body = req.body;
  const id = user.length+1;
  user.push({...body , id});
  fs.writeFile('./UsersINFO.json',JSON.stringify(user),(err,data)=>{
    return res.json("Status Sucess")
  });


});

app.delete('/api/users/:id' , (req,res)=>{
  const id = Number(req.params.id);
  const index = user.findIndex(us => us.id === id );
  user.splice(index,1);
  fs.writeFile('./UsersINFO.json',JSON.stringify(user),(err,data)=>{
    return res.json("Delete SucessFull");
  })
});

app.patch('/api/users/:id',(req,res)=>{
  const id = Number(req.params.id);
  const body = req.body;
  const u = user.find(us => us.id === id);
  const updatedUser = { ...u, ...body };
 updatedUser.id=id;
  user[id]=updatedUser;

  fs.writeFile('./UsersINFO.json',JSON.stringify(user), (err,data)=>{
    return res.json("Updates Sucessfully");
  })
})




app.listen(PORT , ()=>{ 
  console.log(`Server is Runnig on PORT No: ${PORT}`);
  
});