function getStockChart(elementId, title, series) {
    return Highcharts.stockChart(elementId, {
        rangeSelector: {
            selected: 1
        },

        title: {
            text: title
        },

        series
    });

}
