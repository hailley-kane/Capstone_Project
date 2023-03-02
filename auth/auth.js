const { model } = require("mongoose");

//middleware to check user login is true
var ensureAuth = function ensureAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        next();
    }
    else{
        req.flash("info", "you must be logged in to access this page")
        res.redirect("/login")
    }
}

var ensureAd = function ensureAdmin(req,res,next){
    if(req.isAuthenticated()){
        next();
    }
    else{
        req.flash("info", "you must be a Admin")
        res.redirect("/login")
    }
}

module.exports = {ensureAuthenticated: ensureAuth,  ensureAdmin: this.ensureAdmin}