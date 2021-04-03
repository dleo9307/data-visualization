const API_HOST = 'http://localhost:3000';

async function init() {
    await getOrderedMerchandiseTop5PieChart();
    await getRefundedMerchandiseTop5PieChart();
    await getSalesStockChart();
}

async function getOrderedMerchandiseTop5PieChart() {
    const data = await getData('/pie/ordered_merchandise_top5');
    const series = [{
        name: '건수',
        colorByPoint: true,
        data
    }]
    getPieChart('pie_ordered_merchandise_top5', '주문된 상품 TOP 5', series);
}

async function getRefundedMerchandiseTop5PieChart() {
    const data = await getData('/pie/refunded_merchandise_top5');
    const series = [{
        name: '건수',
        colorByPoint: true,
        data
    }]
    getPieChart('pie_refunded_merchandise_top5', '환불된 상품 TOP 5', series);
}

async function getSalesStockChart() {
    const data = await getData('/stock/sales');
    const series = [
        {
            name: '금액(원)',
            data,
            marker: {
                enabled: true,
                radius: 3
            },
            shadow: true,
            tooltip: {
                valuePrefix: '₩',
            }
        }
    ]
    getStockChart('stock_sales', '직구 매출 추이', series)
}

async function getPriceLinkedOrderedMerchandiseTop5() {
    const data = await getData('/sankey/price_linked_ordered_merchandise_top5');
    const series = {
        keys: ['from', 'to', 'weight'],
        data,
        type: 'sankey',
        name: '가격대별 주문된 상품'
    };
    getSankeyChart('price_sankey', '가격대별 주문된 상품 TOP5', series);
}

async function getData(url) {
    return fetch(`${API_HOST}${url}`)
        .then((res) => res.json());
}
