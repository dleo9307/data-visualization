const database = require('../../../common/database');
const {orderedMerchandiseTop10, refundedMerchandiseTop10} = require('../../../common/query/pie.json');

exports.getOrderedMerchandiseTop10 = async () => {
    return database.getData(orderedMerchandiseTop10);
}

exports.getRefundedMerchandiseTop10 = async () => {
    return database.getData(refundedMerchandiseTop10);
}
