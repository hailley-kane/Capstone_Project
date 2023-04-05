//USED TO CREATE USER SCHEMA AND SVAE TO DATABASE
var mongoose = require("mongoose");

//USER SCHEMA THAT WILL BE SAVE IN DATABASE PER USER CREATION
var userDataSchema = mongoose.Schema({
    //CREATES AN OBJECT TO SAVE USER CONTEXT FOR DATA STORED
    userID:{type:mongoose.Schema.Types.ObjectId, required:true, unique:true},
    calories:{type:Integer, required:false, default: 0},
    weight:{type:Integer, required:false, default: 0},
    sex:{Type:String, default: Null, required: True},
    createdAt:{type:Date, default:Date.now}
})

//CREATE VARIABLE TO STORE AND HOLD USERDATASCHEMA
var UserData = mongoose.model("UserData", userDataSchema);

module.exports = UserData;