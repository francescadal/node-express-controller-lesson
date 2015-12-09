var express = require('express');
var router = express.Router();
//var exCtrl = require('../controllers/examplePOJOController');
var contEx = require('../controllers/exampleController')


/* GET home page. */
router.route('/').
    get(contEx.getHandler('get')).
    post(contEx.getHandler('post')).
    all(contEx.getHandler('deny'));


module.exports = router;


