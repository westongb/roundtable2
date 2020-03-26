const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema({
    _id:  mongoose.Schema.Types.ObjectId,
    firstName : String,
    lastName: String,
    emailAddress: String,
    userName: String,
    password: { type: String, required: true, bcrypt: true },
    

})

module.exports = mongoose.model('UserSchema', UserSchema)