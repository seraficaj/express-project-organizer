let express = require("express");
let db = require("../models");
let router = express.Router();

router.get('/new', (req, res)=>{
    res.render('users/new.ejs')
})

module.exports = router;