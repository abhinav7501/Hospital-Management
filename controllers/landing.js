var mysql =require('mysql');
var express = require ('express');
var cookie = require ('cookie-parser');
var db = require.main.require ('./models/db_controller');
var router = express.Router();
var bodyParser = require ('body-parser');
router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());

router.get('/',function(req,res){
    res.render('landing.ejs');
});








module.exports = router;