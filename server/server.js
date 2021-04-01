const express = require('express');
const cors = require('cors');
const chartService = require('./service/chart-service');
const { orderedMerchandiseTop5, refundedMerchandiseTop5 } = require('./common/query/pie.json');
const { salesStock } = require('./common/query/stock.json')

const app = express();
const PORT = 3000;

app.use(cors())

app.get('/pie/ordered_merchandise_top5', async (req, res) => {
    const result = await chartService.getPieChart(orderedMerchandiseTop5);
    res.json(result);
})

app.get('/pie/refunded_merchandise_top5', async (req, res) => {
    const result = await chartService.getPieChart(refundedMerchandiseTop5);
    res.json(result);
})

app.get('/stock/sales', async (req, res) => {
    const result = await chartService.getStockChart(salesStock, 'day');
    res.json(result);
})

app.listen(3000, (err, res) => {
    console.info(`Server Start PORT : ${PORT}`);
})
