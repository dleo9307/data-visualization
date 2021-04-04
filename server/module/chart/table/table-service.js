const database = require('../../../common/database');
const {revenueTop10} = require('../../../common/query/table.json');

exports.getRevenueTop10 = async () => {
    return database.getData(revenueTop10);
}
