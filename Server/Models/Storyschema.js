const mongoose = require('mongoose');

const storySchema = mongoose.Schema({
    _id:  mongoose.Schema.Types.ObjectId,
    story: {
        type: Text,
        require: true
    }

})

module.exports = mongoose.model('storySchema', storySchema)