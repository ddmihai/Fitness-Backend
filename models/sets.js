const mongoose          = require('mongoose');

/* User Schema */
const set = new mongoose.Schema({
    reps:  { type: Number, required: true },
    weight: { type: Number, required: true},
    timeBetween: { type: String, required: true},
    comments: { type: String }
});


/* Export Schema */
module.exports = mongoose.model('Set', set);