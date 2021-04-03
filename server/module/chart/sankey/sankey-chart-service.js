const database = require('../../../common/database');
const {priceLinkedOrderedMerchandiseTop5} = require('../../../common/query/sankey.json');
const sankeyDataTransformService = require('./sankey-data-transform-service');

exports.getPriceLinkedOrderedMerchandiseTop5 = async () => {
    const data = await database.getData(priceLinkedOrderedMerchandiseTop5);
    return sankeyDataTransformService.convertSankeyData(data);
}
