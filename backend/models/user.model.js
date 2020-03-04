const mongoose = require('mongoose');
let passportLocalMongoose = require("passport-local-mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName:String,
    lastName: String,
    
   username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minLength:3
    },
    password:{
        type:String,
        trim:true,
        minLength:8
    }
    

},{
    timestamps:true
});
userSchema.plugin(passportLocalMongoose)

const User = mongoose.model('User',userSchema);
module.exports = User;