const database = require('../../../common/database');
const {orderedMerchandiseTop10, refundedMerchandiseTop10, timeRelatedOrder, requestMerchandiseCategoryTop10, orderRelatedCountry} = require('../../../common/query/pie.json');

exports.getOrderedMerchandiseTop10 = async () => {
    return database.getData(orderedMerchandiseTop10);
}

exports.getRefundedMerchandiseTop10 = async () => {
    return database.getData(refundedMerchandiseTop10);
}

exports.getRequestMerchandiseCategoryTop10 = async () => {
    return database.getData(requestMerchandiseCategoryTop10);
}

exports.getTimeRelatedOrder = async () => {
    return database.getData(timeRelatedOrder);
}

exports.getOrderRelatedCountry = async () => {
    return database.getData(orderRelatedCountry);
}
