
const express = require("express");

const path = require("path");


const publicPath = path.join(__dirname,'node_tu');
// app.use(express.static(publicPath));
console.log(publicPath);






const app = express();

const users = {
  
    name:"ekayz",
    age:30
  
};



app.get('/' ,(req,res)=>{
 res.send(users)
});

app.listen(3030,()=>{
  console.log("server has started");
});