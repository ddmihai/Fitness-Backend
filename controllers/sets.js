const Ex      = require('../models/exercise');
const Set     = require('../models/sets');

exports.addSet = (req, res, next) => {
    const { reps, weight, timeBetween, comments } = req.body;
    
    const set = new Set({
        reps, weight, timeBetween, comments
    })
    .save()
    .then((sets) => {
        // Update the exercise table
        Ex.findOneAndUpdate({ _id: req.params.id}, 
            {
                $push: {
                    sets: sets._id
                }
            })
        .then(() => {
            res.send('Added set')
        })
    })
    .catch((error) => res.send(error))
}