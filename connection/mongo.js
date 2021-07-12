/* MongoDB Connection */
const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb+srv://Daniel:8imUgaVHr5n51fNv@cluster0.fv5gm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(() => console.log('Connected to DB'))
.catch(err => console.log(err))
