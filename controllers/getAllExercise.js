const Ex = require('../models/exercise');
const days = require('../models/dayWorkout');

exports.getExercises = (req, res, next)  => {
    days.findById({ _id: req.params.id })
    .then((day) => {
        if (day.length === 0) {
            res.send('No days created yet!')
        }
    /* Get all exercises from array of exercises */
    Ex.find( { _id : { $in : day.exercices}})
    .then(ex => res.send(ex))
    .catch(error => res.send(error));
    })
    .catch(error => res.send(error))
}


/* 
    This function send all the exercices including the set ID's to the JSON
    **** Get all the exercice informations from a specific ID from DaylyWorkout **** 
    

    --- The result will be filtered in the frontend
*/