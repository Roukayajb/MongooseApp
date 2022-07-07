const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const PersonSchema=new Schema({
    name: {type:String,required:true,trim:true },
    age:{  type:Number},
    favoriteFoods: [String]
 
});
var Person=mongoose.model('Person',PersonSchema);
module.exports=Person;