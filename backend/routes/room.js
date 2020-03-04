const router = require('express').Router();
let Room = require('../models/room.model');

router.get('/',(req,res)=>{
    Room.find()
    .then((rooms)=>res.json(rooms))
    .catch(err => res.status(400).json({error: err}))
})

router.get('/:id',(req,res)=>{
    Room.findById(req.params.id)
    .then((room)=>res.json(room))
    .catch(err => res.status(400).json({error: err}))
})
router.post("/",(req,res)=>{
    const name=req.body.name;
    const images=req.body.images;
    const capacity=req.body.capacity;
    const type=req.body.type;
    const price=req.body.price;
    const size=req.body.size;
    const breakfast=req.body.breakfast;
    const featured=req.body.featured;
    const description= req.body.description;
    const extras = req.body.extras;
    const pets = req.body.pets;
    const newRoom = new Room({
        name,
        images,
        capacity,
        type,
        price,
        size,
        breakfast,
        featured,
        pets,
        description,
        extras
    })
    newRoom.save()
    .then((room)=>res.json('Room Added!'))
    .catch(err => res.status(400).json({error: err}))
})

router.post("/update/:id",(req,res)=>{
    const roomName=req.body.roomName;
    const posterUrl=req.body.posterUrl;
    const numGuests=req.body.numGuests;
    const roomType=req.body.roomType;
    const price=req.body.price;
    const size= {
        width: req.body.width,
        length:req.body.length
    }
    const breakfast=req.body.breakfast;
    const pets = req.body.pets;
    const newRoom = new Room({
        roomName,
        posterUrl,
        numGuests,
        roomType,
        price,
        size,
        breakfast,
        pets
    })
   Room.findOneAndUpdate({id: req.params.id}, newRoom)
    .then((room)=>res.json('Room Updated!'))
    .catch(err => res.status(400).json({error: err}))
})
router.delete('/:id',(req,res)=>{
    Room.findByIdAndDelete(req.params.id)
    .then(()=>res.json("Room Deleted!"))
    .catch(err => res.status(400).json({error: err}))
})
module.exports = router;