const express = require('express');
const router = express.Router();
const pieChartService = require('./pie-chart-service')

router.get('/ordered_merchandise_top5', async (req, res) => {
    return res.json(await pieChartService.getOrderedMerchandiseTop5());
})

router.get('/refunded_merchandise_top5', async (req, res) => {
    return res.json(await pieChartService.getRefundedMerchandiseTop5());
})

module.exports = router;
