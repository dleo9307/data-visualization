const express = require('express');
const router = express.Router();
const stockChartService = require('./stock-chart-service')

router.get('/sales', async (req, res) => {
    return res.json(await stockChartService.getSales());
})

module.exports = router;
