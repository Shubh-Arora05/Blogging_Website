const express = require('express');
const app = express();
const connectdb = require('./db') ;
require('dotenv').config() ;
const cors = require('cors') ;

const port = process.env.PORT ||3000;


const user_routes = require('./routes/userroutes') ;
const blog_routes = require('./routes/blogroutes') ;
// 


app.use(cors()) ;
app.use(express.json());
app.get('/' , async(req, res)=>{
    console.log('Hello World');
    res.status(200).send("Radhe Krishna") ;
})

app.use('/app/v1/user' , user_routes ) ;
app.use('/app/v1/blog' , blog_routes) ;





connectdb().then(() => {
    app.listen(port, () => {
      console.log(`Server is running on ${port}`);
    });
  }).catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit process if DB connection fails
});
  

module.exports = app ;