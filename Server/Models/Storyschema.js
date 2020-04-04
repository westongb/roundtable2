const mongoose = require('mongoose');

const storySchema = mongoose.Schema({
    _id:  mongoose.Schema.Types.ObjectId,
    
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    user: {type:String,
        required: true},
    story: {
        type: String,
        require: true
    }

})

module.exports = mongoose.model('storySchema', storySchema)