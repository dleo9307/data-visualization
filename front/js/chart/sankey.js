function getSankeyChart(elementId, title, series) {
    Highcharts.chart(elementId, {

        title: {
            text: title
        },
        accessibility: {
            point: {
                valueDescriptionFormat: '{index}. {point.from} to {point.to}, {point.weight}.'
            }
        },
        series
    });
}
