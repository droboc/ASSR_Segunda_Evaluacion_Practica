const mongoose = require('mongoose')


var routerSchema = new mongoose.Schema({
    StreetAddress:{ type: String, required: ' This field is required', },
    IntersectionDirections:{ type: String, required: ' This field is required', },
    City:{ type: String, required: ' This field is required', },
    State:{ type: String, required: ' This field is required', },
    ZIP:{ type: String, required: ' This field is required', },
    StationPhone:{ type: String, required: ' This field is required', },
    StatusCode:{ type: String, required: ' This field is required', },
    GroupsWithAccessCode:{ type: String, required: ' This field is required', },
    AccessDaysTime:{ type: String, required: ' This field is required', },
});



mongoose.model("stations", routerSchema);

