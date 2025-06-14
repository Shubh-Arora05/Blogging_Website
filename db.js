

const mongoose = require("mongoose") ;


const mongodb_url = `mongodb+srv://shubharoraofficial05:DIQoec3BRzuGzDDo@cluster0.yuskbns.mongodb.net/`
const connectdb = async () =>{
    try{
   
       await mongoose.connect('mongodb+srv://shubharoraofficial05:DIQoec3BRzuGzDDo@cluster0.yuskbns.mongodb.net/',{
        useNewUrlParser: true,
            useUnifiedTopology: true,
       }) ;
       console.log("CONNECTED TO DB")
    }
    catch(error){
        console.log('error in Connected to MongoDB') ;
        process.exit(0) ;
    }
}









module.exports = connectdb ;

    