const express = require('express');
const router = express.Router();
const astrologerController = require('../controllers/astrologerController');

router.post('/', astrologerController.createAstrologer);
router.patch('/:id/toggle', astrologerController.toggleTopAstrologer);

module.exports = router;
