var mongoose = require('mongoose');
var plm = require('passport-local-mongoose');

mongoose.connect('mongodb://localhost/registerationofstudent');

var userSchema = mongoose.Schema({
   firstname:String,
   lastname:String,
   username:String,
   password:String
});

userSchema.plugin(plm);

module.exports = mongoose.model('user',userSchema);