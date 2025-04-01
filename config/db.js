const mongoose = require("mongoose")

const connection = mongoose.createConnection("mongodb://localhost:27017/").on("open", ()=>{
    console.log("Connection successfully");
    
}).on("error", ()=>{
    console.log("MongoDb connection failed");
    
})

module.exports = connection;