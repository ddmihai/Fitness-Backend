const Ex        = require('../models/exercise');
const sets      = require('../models/sets');

exports.getSets = (req, res, next)  => {
    Ex.findById({ _id: req.params.id })
    .then((ex) => {
        if (ex.sets.length === 0) {
        return res.send('No sets created yet !')
        }

        sets.find({ _id :{ $in : ex.sets}})
        .then((set) => res.send(set))
        .catch(error => res.send(error))
        
    })
    .catch(error => res.send(error))
}
// days.findById({ _id: req.params.id })
//     .then((day) => {
//         if (day.length === 0) {
//             res.send('No days created yet!')
//         }
//     /* Get all exercises from array of exercises */
//     Ex.find( { _id : { $in : day.exercices}})
//     .then(ex => res.send(ex))
//     .catch(error => res.send(error));
//     })
//     .catch(error => res.send(error))