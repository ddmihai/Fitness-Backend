const express        = require('express');
const router         = express.Router();

const dailyworkout   = require('../controllers/dailyworkout');
const exercise       = require('../controllers/addExercise');
const sets           = require('../controllers/sets');

/* Routes */
router.post('/add/dailyworkout',      dailyworkout.addDay);
router.post('/add/exercise/:id',      exercise.exercise);
router.post('/add/set/:id',           sets.addSet);

module.exports = router;