const router = require('express').Router();
let Booking = require('../models/booking.model');
let User = require('../models/user.model');


router.get('/:userId', (req,res)=>{

        
        User.findById(req.params.userId,(err,user)=>{
            if(err){
                res.status(400).json(err); 
            }
            Booking.find()
            .then((bookings)=>{
            
                bookings = bookings.filter((booking)=>(booking.user.id).equals(user._id));
        
               res.json(bookings);
        }).catch(err => res.status(400).json(err))
        })
        
       
  
});



router.post("/add/:roomId",(req,res)=>{
 
  
   const arrivalDate = Date.parse(req.body.arrivalDate);
    const departureDate = Date.parse(req.body.departureDate);
      const notes = req.body.notes;

        const newBooking = new Booking({
            arrivalDate:arrivalDate,
            departureDate:departureDate,
            notes:notes
        })
        newBooking.save()
        .then((booking)=>{
            booking.room.id = req.params.roomId;
            booking.room.name = req.body.name;
            booking.user.id = req.body.user._id;
            booking.user.name = req.body.user.firstName +" "+ req.body.user.lastName;
            booking.save();
            
            res.json(booking)})
        .catch(err => {
            console.log(err);
            res.status(400).json(err)})
       
   
})


//can only update dates
// router.post("/:bookingId", (req,res)=>{
  
//     Booking.findById(req.params.bookingId)
//     .then((booking)=>{
//         booking.arrivalDate = Date.parse(req.body.arrivalDate);
//         booking.departureDate = Date.parse(req.body.departureDate);
        
//         booking.save()
//         .then((updatedBooking)=>res.json(updatedBooking))
//         .catch(err => res.status(400).json(err))
//     })
//     .catch(err => res.status(400).json(err))
// })

router.delete("/:bookingId",  (req,res)=>{
  
    Booking.findByIdAndDelete(req.params.bookingId)
    .then((booking)=>res.json(booking))
    .catch(err => res.status(400).json(err))
})

module.exports = router;