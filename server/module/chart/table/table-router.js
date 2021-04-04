const express = require('express');
const router = express.Router();
const tableService = require('./table-service')

router.get('/revenue_top10', async (req, res) => {
    return res.json(await tableService.getRevenueTop10());
})
module.exports = router;
