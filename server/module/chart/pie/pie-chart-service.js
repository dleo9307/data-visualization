const database = require('../../../common/database');
const {orderedMerchandiseTop10, refundedMerchandiseTop10, timeRelatedOrder} = require('../../../common/query/pie.json');

exports.getOrderedMerchandiseTop10 = async () => {
    return database.getData(orderedMerchandiseTop10);
}

exports.getRefundedMerchandiseTop10 = async () => {
    return database.getData(refundedMerchandiseTop10);
}

exports.getTimeRelatedOrder = async () => {
    return database.getData(timeRelatedOrder);
}
