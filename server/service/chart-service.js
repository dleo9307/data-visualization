const database = require('../common/database');

exports.getPieChart = async (querySql) => {
    const connection = await database.getConnection();
    return connection.query(querySql).then((result) => result[0]);
}