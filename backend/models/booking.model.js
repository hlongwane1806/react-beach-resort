const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
   
    room: {
      id:{  type: mongoose.Schema.Types.ObjectId,
        ref:'Room'
      },
      name:String
    },
    arrivalDate:{
      type:Date,
      required:true,
  },
  departureDate:{
    type:Date,
    required:true,
},
  notes:{
    type:String
  },

  user: {
    id:{  type: mongoose.Schema.Types.ObjectId,
      ref:'User'
    },
    name:String
  },
}, 

{
  timestamps:true
})

const Booking = new mongoose.model("Booking", bookingSchema);
module.exports = Booking;
