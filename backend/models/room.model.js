const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        images:{
            type:Array,
            default:''
        },
        type:{
            type:String,
            required:true
        },
        capacity:{
            type:Number,
            required:true,
            
        },
        price:{
            type:Number,
            required:true,
        },
        size:{
            type:Number,
            required:true,
        },
        breakfast:{
            type:Boolean,
            required:true,
        },
        pets:{
            type:Boolean,
            required:true,
        },
        featured:{
            type:Boolean,
            required:true,
        },
        description:{
            type:String,
            required:true
        },
        extras:{
            type:[]
        }
}, {
    timestamps:true
});

const Room = new mongoose.model("Room", roomSchema);
module.exports = Room;