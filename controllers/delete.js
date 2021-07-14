const Exercise      = require('../models/exercise');
const Day           = require('../models/dayWorkout');
const Sets          = require('../models/sets');

/* Delete Dayly workout */
exports.day = (req, res, next) => {
    Day.findByIdAndDelete({ _id: req.params.id })
    .then(() => res.send('Day deleted!'))
    .catch(error => res.send(error))
}


/* Delete exercise workout */
exports.exercise = (req, res, next) => {
    Exercise.findByIdAndDelete({ _id: req.params.id })
    .then(() => res.send('Exercise deleted!'))
    .catch(error => res.send(error))
}


/* Delete set workout */
exports.set = (req, res, next) => {
    Sets.findByIdAndDelete({ _id: req.params.id })
    .then(() => res.send('Set deleted!'))
    .catch(error => res.send(error))
}
