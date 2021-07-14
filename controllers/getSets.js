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

/* 
    Get the specified exercise from a specified ID
    Then get all the sets from the array
*/