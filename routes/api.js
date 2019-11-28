var express = require('express');
var router = express.Router();

var apiCtrl = require('../controllers/api/cast');

router.get('/', apiCtrl.index);
router.get('/:id', apiCtrl.show);
router.post('/', apiCtrl.create);
router.put('/:id', apiCtrl.update);
router.delete('/:id', apiCtrl.delete);

module.exports = router;