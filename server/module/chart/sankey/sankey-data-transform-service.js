exports.convertSankeyData = (data) =>{
    return data.map((row) => [row.fromKey, row.toKey, row.value]);
}
