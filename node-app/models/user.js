//数据存储
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creare Schema
const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
    },
    identity:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

// console.log(' UserSchema', UserSchema)
module.exports = User = mongoose.model("users", UserSchema);