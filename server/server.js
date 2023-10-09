const express = require("express");
const SignUpModal = require("./models/SignUpModel")
const Admin = require("./models/Admin")
const DistProd = require("./models/DistProd")
const cors= require("cors")
const app = express();

app.use(express.json());




//for model creation 
const sequelize = require('./config/database');
app.use(cors())
sequelize
.sync()
.then((result) => {
    return result;
  })
  .catch((error) => {
    console.log(error);
  });
  
  
  
  
  //database connectivity
  const db = require("./config/db.config");
  db.connect((err) => {
  if (err) throw err;
  console.log("MySQL database connected!");
});



app.get("/", (req, res) => {
  res.send("connected");
});


const dataRoute = require("./routes/data");
app.use("/data", dataRoute);

app.use("/uploads",express.static("./uploads"))


app.get("/add",(req,res)=> {
  
  const fullname = "Manoj";
  const username = "wdkjcb";
  const mobile = "1234567890";
  const password = "wkjfbrf";
  try{
    db.query("INSERT INTO signupmodel (fullname,username,mobilenumber,password) values(?,?,?,?)",[fullname, username, mobile, password]
    ,(err,result)=>{
    if(err){
        console.log(err)
    }else{
        console.log("data get")
    }
    
})
}catch (error) {
    res.status(422).json({status:422,error})
}


})


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server listening the port http://localhost/" + port);
});