const mongoose = require("mongoose")

const connection = mongoose.createConnection("mongodb://127.0.0.1:27017/biteupdata").on("open", ()=>{
    console.log("Connection successfully");
    
}).on("error", ()=>{
    console.log("MongoDb connection failed");
    
})

module.exports = connection;