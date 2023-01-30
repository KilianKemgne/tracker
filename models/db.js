const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    family: 4,
    useCreateIndex: true, 
    useFindAndModify: false
   })
   .then(() => console.log('MongoDB connection succeeded.'))
   .catch((err) => console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)));

require('./user.model');