

const mongoose = require("mongoose") ;


const mongodb_url = `mongodb+srv://shubharora:shubharora@cluster0.3mwodev.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const connectdb = async () =>{
    try{
   
       await mongoose.connect('mongodb+srv://shubharora:shubharora@cluster0.3mwodev.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0') ;
       console.log("CONNECTED TO DB")
    }
    catch(error){
        console.log('error in Connected to MongoDB') ;
        process.exit(0) ;
    }
}









module.exports = connectdb ;

    