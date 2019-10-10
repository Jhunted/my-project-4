const Collection = require('../models/collection');
const User = require('../models/user');



function addCollection(req, res) {

    User.findById(req.user._id, function(err, foundUser) {
        let newCollection = new Collection({
            title: req.body.title,
            issueNumber: req.body.issueNumber,
            pageCount: req.body.pageCount,
            description: req.body.description,
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


module.exports = {
    addCollection,
    getCollection
};