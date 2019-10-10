const mongoose = require('mongoose');

//AnimeSchema
const PostSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    //mal_id
    //image_url
    name: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    synopsis: {
        type: String,
        required: true
    } 
    //rating
});

module.exports = mongoose.model('post', PostSchema);