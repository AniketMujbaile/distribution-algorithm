const express = require('express');
const router = express.Router();
const distributionController = require('../controllers/distributionController');

router.post('/distribute', distributionController.distributeUsers);

module.exports = router;
