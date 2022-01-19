const express = require("express")
var router = express.Router()
const mongoose = require("mongoose")
const Routes = mongoose.model("stations")

router.get("/list", (req, res) => {
    Routes.find((err,docs) =>{
        if (!err) {
            res.render("router/list", {
                list: docs
            })
        } else {
            console.log("Error in retrieval: " + err)
        }
    });
});


module.exports = router