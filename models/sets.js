const mongoose          = require('mongoose');

/* User Schema */
const set = new mongoose.Schema({
    reps:  { type: Number, required: false },
    weight: { type: Number, required: false},
    timeBetween: { type: String, required: false},
    comments: { type: String }
});


/* Export Schema */
module.exports = mongoose.model('Set', set);