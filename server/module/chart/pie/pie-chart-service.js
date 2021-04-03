const database = require('../../../common/database');
const {orderedMerchandiseTop5, refundedMerchandiseTop5} = require('../../../common/query/pie.json');

exports.getOrderedMerchandiseTop5 = async () => {
    return database.getData(orderedMerchandiseTop5);
}

exports.getRefundedMerchandiseTop5 = async () => {
    return database.getData(refundedMerchandiseTop5);
}
