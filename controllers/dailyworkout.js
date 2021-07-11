const Day      = require('../models/dayWorkout');

exports.addDay = (req, res, next) => {
    const day = new Day({
        dayName: req.body.dayName
    })
    .save()
    .then(() => {
        res.status(201).json({ message: 'Workout day created !'})
    })
    .catch((error) => {
        res.status(500).json({
            error: error
        })
    })
}