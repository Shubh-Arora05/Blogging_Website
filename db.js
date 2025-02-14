

const mongoose = require("mongoose") ;


require('dotenv').config() ;
const mongodb_url = process.env.MONGODB_URL ;
const connectdb = async () =>{
    try{
   
       await mongoose.connect(mongodb_url) ;
       console.log("CONNECTED TO DB")
    }
    catch(error){
        console.log('error in Connected to MongoDB') ;
        process.exit(0) ;
    }
}





module.exports = connectdb ;

    