const express=require('express');
// const mongoose=require('mongoose');
const cors=require('cors');

const app=express();
app.use(express.json());
app.use(cors());

const FoodModel=require("./models/Food");


//mongoose.connect("mongodb://127.0.0.1:27017/food");

//mdb.connect("mongodb+srv://admin:admin@cluster0.jjcj38o.mongodb.net/?retryWrites=true&w=majority");

app.post("/insert",async(req,res)=>{

    const foodName=req.body.foodName
    const description=req.body.description
    res.end()
    
    const food={
        foodName:foodName,
        description:description
    }
    try{
        await(FoodModel.insert(food));
    }catch(err){
        console.log(err);
    }
});

app.get("/read",async(req,res)=>{

    result = FoodModel.find().then((data)=>{res.json(data)})
    // res.json(result); 
});

app.put("/update",async(req,res)=>{

    const newFoodName=req.body.newFoodName;
    const id=req.body.id;
    console.log(id)
 
    try{
        await FoodModel.update(id,newFoodName)
        res.end()
    }
    catch(err){
        console.log(err);
    }
});
 
app.delete("/delete/:id", async(req,res) => {
    const id=req.params.id;
    FoodModel.delete(id)
    res.end();
});
   
app.listen(8080, () =>{
    console.log("server is running");
});