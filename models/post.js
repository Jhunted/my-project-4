const mongoose = require('mongoose');

//AnimeSchema
const PostSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    //mal_id
    //image_url
    title: {
        type: String,
        required: true
    },

    synopsis: {
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model('post', PostSchema);