const database = require('../common/database');
const dataTransformService = require('./data-transform-service');

exports.getPieChart = async (querySql) => {
    return getData(querySql);
}

exports.getStockChart = async (querySql, timeUnit) => {
    const data = await getData(querySql);
    return dataTransformService.convertStockData(data, timeUnit);
}

async function getData(querySql) {
    const connection = await database.getConnection();
    return connection.query(querySql).then((result) => result[0]);
}
