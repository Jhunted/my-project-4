const Collection = require('../models/collection');
const User = require('../models/user');

module.exports = {
    addCollection,
    getCollection
};

function addCollection(req, res) {

    User.findById(req.user._id, function(err, foundUser) {
        let newCollection = new Collection({
            name: req.body.name,
            role: req.body.role,
            url: req.body.url,
            image_url: req.body.image_url,
            mal_id: req.body.mal_id,
            user: foundUser
        })
        
        newCollection.save(function (err, savedCollection) {
            if (err) console.log(err);
            res.status(200).json(savedCollection);
        });
    });
}

function getCollection(req, res) {
    Collection.find({user: req.user._id}, function(err, collection) {
        if (err) console.log(err);
        res.status(200).json(collection);
    });
}

