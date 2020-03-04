const router = require('express').Router();
let Exercise = require('../models/exercise.model');

//read
router.get('/',(req,res)=>{

    //list all exercises
        Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json("ERROR: "+err))
});


//create
router.post('/add',(req,res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });

    newExercise.save()
    .then(()=> res.json("Exercise added!"))
    .catch(err => res.status(400).json("ERROR: "+err))
});
//update 
router.post('/update/:id',(req,res)=>{
    Exercise.findById(req.params.id) 
        .then((exercise)=>{    
   
    exercise.username = req.body.username;
    exercise.description = req.body.description;
    exercise.duration = Number(req.body.duration);
    exercise.date = Date.parse(req.body.date);

    exercise.save()
    .then(()=>res.json('Exercise Updated!'))
    .catch((err)=> res.status(400).json("ERROR: "+err));

    

}).catch((err)=> res.status(400).json("ERROR: "+err));
    
});

//read just One
router.get('/:id',(req,res)=>{

    //list all exercises
        Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json("ERROR: "+err))
});
//delete
router.delete('/:id',(req,res)=>{

    Exercise.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Exercise Deleted'))
    .catch((err)=> res.status(400).json("ERROR: "+err));

});
module.exports = router;