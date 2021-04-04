const API_HOST = 'http://localhost:3000';

async function init() {
    await getOrderedMerchandiseTop10PieChart();
    await getRefundedMerchandiseTop10PieChart();
    await getSalesStockChart();
    await getPriceLinkedOrderedMerchandiseTop10SankeyChart();
    await getTimeRelatedOrderBarChart();
    await getRevenueTable();
    await getRequestMerchandiseCategoryTop10BarChart();
    await getOrderRelatedCountryPieChart();
}

async function getOrderedMerchandiseTop10PieChart() {
    const data = await getData('/pie/ordered_merchandise_top10');
    const series = [{
        name: '건수',
        colorByPoint: true,
        data
    }]
    getPieChart('pie_ordered_merchandise_top10', '주문된 상품 TOP10', series);
}

async function getRefundedMerchandiseTop10PieChart() {
    const data = await getData('/pie/refunded_merchandise_top10');
    const series = [{
        name: '건수',
        colorByPoint: true,
        data
    }]
    getPieChart('pie_refunded_merchandise_top10', '환불된 상품 TOP10', series);
}

async function getOrderRelatedCountryPieChart() {
    const data = await getData('/pie/order_related_country');
    const series = [{
        name: '건수',
        colorByPoint: true,
        data
    }]
    getPieChart('pie_order_related_country', '국가별 주문 현황', series);
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

async function getPriceLinkedOrderedMerchandiseTop10SankeyChart() {
    const data = await getData('/sankey/price_linked_ordered_merchandise_top5');
    const series = [{
        keys: ['from', 'to', 'weight'],
        minLinkWidth: 5,
        nodeWidth: 300,
        data,
        type: 'sankey',
        name: '가격대별 주문된 상품'
    }];
    getSankeyChart('sankey_price', '가격대별 주문된 상품 TOP5', series);
}

async function getTimeRelatedOrderBarChart() {
    const data = await getData('/pie/time_related_order');
    const series = [{
        name: '주문건수',
        colorByPoint: true,
        data
    }]
    getBarChart('bar_time_related_order', '시간대별 주문내역', series);
}

async function getRequestMerchandiseCategoryTop10BarChart() {
    const data = await getData('/pie/request_merchandise_top10');
    const series = [{
        name: '카테고리',
        colorByPoint: true,
        data
    }]
    getBarChart('bar_request_merchandise_category_top10', '요청상품 카테고리 TOP10', series);
}

async function getRevenueTable() {
    const rows = await getData('/table/revenue_top10');
    const headers = ['상품아이디', '상품코드', '상품명', '판매가', '평균 구매 단가', '판매 마진'];
    const data = {rows, headers}
    getTable('table_revenue_top10', data);
}

async function getData(url) {
    return fetch(`${API_HOST}${url}`)
        .then((res) => res.json());
}
