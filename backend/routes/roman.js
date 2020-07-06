const express = require('express');
const router = express.Router(); 

const romanCtrl = require('../controllers/roman');
const auth = require('../middleware/auth');

router.post('/add', romanCtrl.add);
router.post('/edit', romanCtrl.edit);
router.post('/next', auth, romanCtrl.next);

module.exports = router;