var express = require('express');
var router = express.Router();
var exCtrl = require('../controllers/examplePOJOController');


/* GET home page. */
router.route('/').
    get(exCtrl.get).
    post(exCtrl.post).
    all(exCtrl.deny);

module.exports = router;


