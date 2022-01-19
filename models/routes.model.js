const mongoose = require('mongoose')


var routerSchema = new mongoose.Schema({
    City:{ type: String, required: ' This field is required', },
    State:{ type: String, required: ' This field is required', },
    ZIP:{ type: String, required: ' This field is required', },
});



mongoose.model("stations", routerSchema);

