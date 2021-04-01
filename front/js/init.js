async function init() {
    await getOrderedMerchandiseTop5PieChart();
    await getRefundedMerchandiseTop5PieChart();
    await getSalesStockChart();
}

async function getOrderedMerchandiseTop5PieChart() {
    const data = await fetch('http://localhost:3000/pie/ordered_merchandise_top5')
        .then((res) => res.json());


    getPieChart('pie_ordered_merchandise_top5', '주문된 상품 TOP 5', data);

}

async function getRefundedMerchandiseTop5PieChart() {
    const data = await fetch('http://localhost:3000/pie/refunded_merchandise_top5')
        .then((res) => res.json());

    getPieChart('pie_refunded_merchandise_top5', '환불된 상품 TOP 5', data);

}

async function getSalesStockChart() {
    const data = await fetch('http://localhost:3000/stock/sales')
        .then((res) => res.json());

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
