async function init() {
    await getOrderedMerchandiseTop5PieChart();
    await getRefundedMerchandiseTop5PieChart();
}

async function getOrderedMerchandiseTop5PieChart() {
    const data = await fetch('http://localhost:3000/pie/ordered_merchandise_top5')
        .then(function (response) {
            return response.json();
        });

    getPieChart('pie_ordered_merchandise_top5', '주문된 상품 TOP 5', data);

}

async function getRefundedMerchandiseTop5PieChart() {
    const data = await fetch('http://localhost:3000/pie/refunded_merchandise_top5')
        .then(function (response) {
            return response.json();
        });

    getPieChart('pie_refunded_merchandise_top5', '환불된 상품 TOP 5', data);

}