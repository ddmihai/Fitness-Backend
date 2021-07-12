const days = require('../models/dayWorkout');

exports.getDay = (req, res, next) => {
    days.find()
    .then((day) => {
        if (day.length === 0) {
            res.send('No days created yet!')
        }

        res.send(day)
    })
    .catch(error => res.send(error))
}