

const express = require('express');
const users = require('./UsersINFO.json');
const fs = require('fs');

const app = express();
const port = 8000;

//middle ware

app.use(express.urlencoded({
  extended:false
}));


// routes

app.get('/api/users',(req,res) =>{
  return res.json(users);
})

app.get('/users',(req,res)=>{
  const html = `
  <ul>
    ${users.map((user)=>
      
      `
      <li>${user.first_name}</li>
      `
    ).join("")}
  </ul>`;
  res.send(html);

})


// Dynamic Path parameters
app.route('/api/users/:id').get((req,res)=>{
  const id = Number(req.params.id);
  const user = users.find(user => user.id === id );
  return res.json(user);
}).patch((req,res)=>{
  // Edit the user With id
  return res.json("Status pending")
}).delete((req,res)=>{
  // DELETE the user With id
  return res.json("Status pending")
})




app.post('/api/users',(req,res)=>{
  // TODO Create New User
  const body = req.body;
  // console.log("body",body);
  users.push({...body, id:users.length+1});
  fs.writeFile('./UsersINFO.json',JSON.stringify(users) ,(err,data) =>{
    return res.json("Status Suceess")
  } );

  
});

// app.patch('/api/users:id',(req,res)=>{
//   // Edit the user With id
//   return res.json("Status pending")
// })

// app.delete('/api/users:id',(req,res)=>{
//   // DELETE the user With id
//   return res.json("Status pending")
// })


app.listen(port , ()=>{
  console.log("Server is Running");
})

