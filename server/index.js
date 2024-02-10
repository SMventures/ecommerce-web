





const express = require('express')
const mongoose= require('mongoose')
const app = express();
const mongodb="mongodb://localhost:27017/ecommerce-web"
mongoose.connect(mongodb,(err) =>{
if (err) console.log(`unable to connect to the server:${err}`);
else
 console.log("mongodb is connected");
})



const PORT = 8000;


app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

