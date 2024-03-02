var express = require ('express');
var router = express.Router();
var db = require.main.require ('./models/db_controller');
var bodyParser = require ('body-parser');
router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());
router.get('*', function(req, res, next){
	if(req.cookies['username'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/',function(req,res){
    db.getcomplain(function(err,result){
        res.render('inbox.ejs',{list :result});
    })
});











module.exports =router;

