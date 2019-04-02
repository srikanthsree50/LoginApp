const port = process.env.PORT || 8080;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



mongoose.connect('mongodb://localhost:27017/LOGINDB',{ useNewUrlParser: true } ,() => {
    console.log('connected....');
})

app.post('/register', (req,res) => {

const newUser = new User();

newUser.email = req.body.email;
newUser.password = req.body.password;


bcrypt.genSalt(10,(err,salt) => {

bcrypt.hash(newUser.password,salt,(err,hash) => {
    if(err) return err;
    newUser.password = hash;


    newUser.save().then(userSaved =>{
        res.send('uSER SAVED');
    }).catch(err =>{
        res.send('uSER NOT SAVED',err);
    
    })

})

})


})


app.listen(port,() => {
    console.log(`server listening at ${port}.....`);
})