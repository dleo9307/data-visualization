const database = require('../../../common/database');
const stockDataTransformService = require('./stock-data-transform-service');
const {salesStock} = require('../../../common/query/stock.json');

exports.getSales = async () => {
    const data = await database.getData(salesStock);
    return stockDataTransformService.convertStockData(data, 'day');
}
