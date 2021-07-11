const Day     = require('../models/dayWorkout');
const Ex      = require('../models/exercise');

exports.exercise = (req, res, next) => {

    const exercise = new Ex({
        nameOrType:         req.body.nameOrType,       
        exerciseComments:   req.body.exerciseComments
    })
    .save()
    .then((ex) => {
        //Update the day table
        Day.findOneAndUpdate({ _id: req.params.id }, 
        {
            $push: {
                exercices: ex._id
            }
        }).then(() => {
            res.send('Created Exercise')
        })
    })
    .catch(error => res.send(error))
}

