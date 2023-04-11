//USED TO CREATE USER SCHEMA AND SVAE TO DATABASE
var mongoose = require("mongoose");

//USER SCHEMA THAT WILL BE SAVE IN DATABASE PER USER CREATION
var userDataSchema = mongoose.Schema({
    //CREATES AN OBJECT TO SAVE USER CONTEXT FOR DATA STORED
    userID:{type:mongoose.Schema.Types.ObjectId, required:true, unique:true},
    calories:{type:Number, required:false, default: 0},
    // age is a range from 1-4 1: less than 18 2: 18-25 3: 25-35 4: 35+
    age:{type: Number, default:0},
    // goalCalories depends on if user wants to gain or lose weight
    goalCalories:{type: Number, default:0},
    weight:{type:Number, required:false, default: 0},
    goalWeight:{type:Number, required:true},
    gender:{Type:String, required: true},
    createdAt:{type:Date, default:Date.now}
})

//CREATE VARIABLE TO STORE AND HOLD USERDATASCHEMA
var UserData = mongoose.model("UserData", userDataSchema);

module.exports = UserData;