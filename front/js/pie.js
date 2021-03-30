// Build the chart
async function getPieChart(elementId, title, data) {
    return Highcharts.chart(elementId, {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: title
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}건</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '개'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true
                },
                showInLegend: true
            }
        },
        series: [{
            name: '건수',
            colorByPoint: true,
            data
        }]
    });
}
