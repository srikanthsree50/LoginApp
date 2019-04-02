const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({

email:{
    required:true,
    type:String,
    unique:true,
    minlength:4,
    trim:true
},

password:{
    required:true,
    type:String,
    minlength:6
}

})

module.exports = mongoose.model('users',UserSchema);