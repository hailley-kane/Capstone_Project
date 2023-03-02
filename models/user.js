var bcrypt = require("bcryptjs");
var mongoose = require("mongoose");
//USED TO HASH USER PASSWORD BEFORE THEY ARE SENT TO DATA BASE
const SALT_FACTOR = 10;

//USER SCHEMA THAT WILL BE SAVE IN DATABASE PER USER CREATION
var userSchema = mongoose.Schema({
    username:{type:String, required:true, unique:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:false},
    admin:{type:Boolean, required:false, default: false},
    createdAt:{type:Date, default:Date.now}
})

//THIS IS MIDDLEWARE BEFORE SAVE TO HASH USERS PASSWORD
userSchema.pre("save", function(done){
    var user = this;
    if(!user.isModified("password")){
        return done();
    }
    // HASHES USER PASSWORD
    bcrypt.genSalt(SALT_FACTOR, function(err,salt){
        if(err){return done(err);}
        bcrypt.hash(user.password, salt, function(err, hashedPassword){
            if(err) {return done(err);}
            user.password = hashedPassword;
            done();
        });
    });

});

//FUNCTION TO CHECK HASHED PASSWORD WITH PASS WORD GIVEN FOR LOGIN
userSchema.methods.checkPassword = function(guess, done){
    if(this.password != null){
        bcrypt.compare(guess,this.password, function(err, isMatch){
           done(err, isMatch);
        });
    }
}

var User = mongoose.model("User", userSchema);

module.exports = User;