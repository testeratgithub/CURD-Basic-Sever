

const urls = "mongodb+srv://testtesty:Passw0rd@clusterdemo.p664txi.mongodb.net/?retryWrites=true&w=majority"

const FoodSchema={
    foodName:{type:String, required:true},
    description:{type:String,required:true}
};

class MongoDB{
    constructor(uri,schema){
        const {MongoClient} = require('mongodb')
        this.o_id = require('mongodb').ObjectId
        const client = new MongoClient(uri)
        try{
            client.connect()
        }
        catch{
            console.log("DB Connection isuess")
            client.connect()
        }
                
        this.connection = client.db('CURD').collection('Food')
        // db.createCollection("Food",{validator:{$jsonSchema:{
        //     bsonType:"object",
        //     required:["foodName","description"],
        //     properties:{
        //         foodName:{
        //             bsonType:"string",
        //             description:"Name of the food - Required"
        //         },
        //         description:{
        //             bsonType:"string",
        //             description:'Info about the food - Required'
        //         }
        //     }
        // }}})
        console.log("Connection Establised")
        this.end_con = ()=>{
            client.close()
            console.log('Send')
        }
    }
    async insert(data){
        await this.connection.insertOne(data)
    }
    async update(id,data){
        await this.connection.updateOne({_id:new this.o_id(id)},{$set:{foodName:data}})
    }
    async delete(id){
        await this.connection.deleteOne({_id:new this.o_id(id)})
    }
    async find(){
        const data = await this.connection.find().toArray()
        return data    
    }
    async end(){
        await this.end_con()
    }

}

const mongo = new MongoDB(urls,FoodSchema)

module.exports=mongo;