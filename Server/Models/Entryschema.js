const mongoose = require('mongoose');

const entrySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: {type:String,
                required: true},
    setDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    Journal: [
           {King: String , Warrior: String , Magician: String ,  Lover: String }]
});

module.exports = mongoose.model('RoundTable', entrySchema, 'RoundTable');