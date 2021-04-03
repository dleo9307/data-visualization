exports.convertStockData = (data, timeUnit) => {
    const result = [];
    const timeData = getTimeData(timeUnit, data[0].time, data[data.length - 1].time);
    timeData.forEach((time) => {
        const point = [time];
        const valueObject = data.find((rowData) => rowData.time === time);
        if(valueObject) point.push(Number(valueObject.value));
        else point.push(0);

        result.push(point);
    })

    return result;
}

function getTimeData(timeUnit, firstTime, lastTime) {
    const result = [firstTime];
    const timeInterval = getTimeInterval(timeUnit);

    for (let i = 0; i < (lastTime - firstTime) / timeInterval; i++) {
        result.push(result[i] + timeInterval);
    }

    return result;
}

function getTimeInterval(timeUnit) {
    switch (timeUnit) {
        case 'hour' : {
            return 3600000;
            break;
        }

        case 'day' : {
            return 3600000 * 24;
            break;
        }

        default : {
            throw new Error('invalid time unit');
        }
    }
}
