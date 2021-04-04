const express = require('express');
const router = express.Router();
const pieChartService = require('./pie-chart-service')

router.get('/ordered_merchandise_top10', async (req, res) => {
    return res.json(await pieChartService.getOrderedMerchandiseTop10());
})

router.get('/refunded_merchandise_top10', async (req, res) => {
    return res.json(await pieChartService.getRefundedMerchandiseTop10());
})

router.get('/time_related_order', async (req, res) => {
    return res.json(await pieChartService.getTimeRelatedOrder());
})

router.get('/request_merchandise_top10', async (req, res) => {
    return res.json(await pieChartService.getRequestMerchandiseCategoryTop10());
})

router.get('/order_related_country', async (req, res) => {
    return res.json(await pieChartService.getOrderRelatedCountry());
})

module.exports = router;
