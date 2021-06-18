var mongoose = require('mongoose');

var contactModel = mongoose.Schema({
    name: String,
    number: Number,
    email: String
},
{
    collection: "contacts"
});
module.exports = mongoose.model('contact', contactModel)