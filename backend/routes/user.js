const router = require('express').Router();
let passport = require('passport');
let User = require('../models/user.model');

router.get('/:id',(req,res)=>{

    //list all users
        User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json({error: err}))
});

router.post('/register',(req,res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const username = req.body.email;
    const newUser = new User({
        firstName,
        lastName,
        username
    });
    User.register(newUser, req.body.password)
    .then((user)=>{
        passport.authenticate("local")(req, res, ()=>{
            res.status(200).json({status: user});
         });
    })
    .catch(err => res.status(400).json({error: err}));
  
});

router.post('/login',passport.authenticate("local"),(req,res)=>{
    res.json(req.user);
});



router.get('/logout',(req,res)=>{
    req.logout();
 res.json("we are logged out!")  ;
})

module.exports= router;