const express = require('express');
const router = express.Router();

router.use('/pie', require('./module/chart/pie/pie-chart-router'));
router.use('/stock', require('./module/chart/stock/stock-chart-router'));
router.use('/sankey', require('./module/chart/sankey/sankey-chart-router'));
router.use('/table', require('./module/chart/table/table-router'));

module.exports = router;
