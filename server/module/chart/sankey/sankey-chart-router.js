const express = require('express');
const router = express.Router();
const sankeyChartService = require('./sankey-chart-service')

router.get('/price_linked_ordered_merchandise_top5', async (req, res) => {
    return res.json(await sankeyChartService.getPriceLinkedOrderedMerchandiseTop5());
})

module.exports = router;
