/* Express config */
const express       = require('express');
const app           = express();
const cors          = require('cors');
const router        = require('./routes/routes');
const mongoose      = require('./connection/mongo');

/* 
    App config 
    Cors ** Body-Parser ** 
*/
app.use(cors());
app.use(express.json());

/* App Routes */
app.use('/api', router);


module.exports = app;