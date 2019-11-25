const mongoose = require('mongoose');

const entrySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    setDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    Journal: {
        type: [{ King: String }, { Warrior: String }, { Magician: String }, { Lover: String }],
        required: true
    }
});

module.exports = mongoose.model('RoundTable', entrySchema, 'RoundTable');