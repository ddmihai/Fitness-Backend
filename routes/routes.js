const express        = require('express');
const router         = express.Router();

/* Post controllers */
const dailyworkout   = require('../controllers/dailyworkout');
const exercise       = require('../controllers/addExercise');
const sets           = require('../controllers/sets');


/* Get controllers */
const getDay   = require('../controllers/getDaylyWorkout');
const getEx    = require('../controllers/getAllExercise');
const getSet   = require('../controllers/getSets');

/* Routes for POST */
router.post('/add/dailyworkout',      dailyworkout.addDay);
router.post('/add/exercise/:id',      exercise.exercise);
router.post('/add/set/:id',           sets.addSet);


/*  Routes for GET */
router.get('/get/dailyworkout',      getDay.getDay);
router.get('/get/exercises/:id',     getEx.getExercises);
router.get('/get/sets/:id',          getSet.getSets);



module.exports = router;