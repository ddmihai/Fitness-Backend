const mongoose          = require('mongoose');

/* User Schema */
const exercise = new mongoose.Schema({
    nameOrType:         { type: String, required: true },
    exerciseComments:   { type: String },
    sets:               { type: Array }
});


/* Export Schema */
module.exports = mongoose.model('Exercise', exercise);