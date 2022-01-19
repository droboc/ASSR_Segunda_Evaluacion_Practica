const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/database', {
    useNewUrlParser: true,
},
(err) => {
    if (!err) {
        console.log('Connection suceeded');
    } else {
        console.log('Error in connection' + err);
    }
});

require('./routes.model');
