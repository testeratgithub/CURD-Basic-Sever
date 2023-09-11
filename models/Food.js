// import MongoDB from './MongoDB'
// const mongoose=require("mongoose");

const urls = "mongodb+srv://testtesty:Passw0rd@clusterdemo.p664txi.mongodb.net/?retryWrites=true&w=majority"




const FoodSchema={
    foodName:{type:String, required:true},
    description:{type:String,required:true}
};

// const Food =new MongoDB(urls,FoodSchema)
const Food=require('./MongoDB')
// Food.find().then((data)=>{console.table(data)})


module.exports=Food;