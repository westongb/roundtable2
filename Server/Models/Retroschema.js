const mongoose = require('mongoose');

const retroSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: {type:String,
                required: true},
    
    setDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    Retro: [
           {Retro}]
});

module.exports = mongoose.model('Retro', retroSchema, 'Retro');