const express = require("express");
const app = express();
const mongoose=require('mongoose');
const bodyParser = require("body-parser");
  app.use(bodyParser.json())
const mongoUrl='mongodb+srv://Roukaya1:JBr11908249@firstdb.gp5zovr.mongodb.net/?retryWrites=true&w=majority'
class Database {
  constructor() {
    this.connection()
  }
connection() {
mongoose.connect(mongoUrl,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    err? console.log(err):console.log('Database is connected')
})
}
}
module.exports = new Database();