const mongoose          = require('mongoose');

/* User Schema */
const dayWorkout = new mongoose.Schema({
    dayName:        { type: String, required: true },
    exercices:      { type: Array }
});


/* Export Schema */
module.exports = mongoose.model('Day', dayWorkout);