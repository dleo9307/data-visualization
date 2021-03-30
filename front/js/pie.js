const { format } = require("node:path");

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
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    // format: '<b>{point.name}</b>: {point.y} 건'
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
