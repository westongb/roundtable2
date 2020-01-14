const mongoose = require('mongoose');

const storySchema = mongoose.Schema({
    _id:  mongoose.Schema.Types.ObjectId,
    date: Date,
    story: {
        type: Text,
        require: true
    }

})

module.exports = mongoose.model('storySchema', storySchema)