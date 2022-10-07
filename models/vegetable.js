const mongoose = require('mongoose');


// Make a Schema
const vegetableSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    color:  { type: String, required: true },
    readyToEat: Boolean
});


//Make a Model From The Schema
const Vegetable = mongoose.model('Vegetable', vegetableSchema);



//Export The Model For Use In The App
module.exports = Vegetable;