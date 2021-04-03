const express = require('express');
const router = express.Router();
const pieChartService = require('./pie-chart-service')

router.get('/ordered_merchandise_top10', async (req, res) => {
    return res.json(await pieChartService.getOrderedMerchandiseTop10());
})

router.get('/refunded_merchandise_top10', async (req, res) => {
    return res.json(await pieChartService.getRefundedMerchandiseTop10());
})

module.exports = router;
