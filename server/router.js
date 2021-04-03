const express = require('express');
const router = express.Router();

router.use('/pie', require('./module/chart/pie/pie-chart-router'));
router.use('/stock', require('./module/chart/stock/stock-chart-router'));

module.exports = router;
