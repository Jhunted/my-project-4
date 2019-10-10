const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
    malid: { type: Number, required: true },
    image_url: { type: String, required: true },
    title: { type: String, required: true },
    synopsis: { type: String, required: true },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Collection', collectionSchema);