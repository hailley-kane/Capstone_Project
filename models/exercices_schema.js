var mongoose = require("mongoose")

var exerciseSchema = mongoose.Schema({
    title:{type:String, required :true},
    description:{type:String, required:true},
    exerciseType:{type:String, required:true},
    exerciseID:{type:mongoose.Schema.Types.ObjectId, required: false},
})

var Exercises = mongoose.model("exercises", exerciseSchema);

module.exports = Exercises;