function getTable(elementId, data) {
    const {rows, headers} = data;
    const element = document.getElementById(elementId);
    element.innerHTML = `<thead><tr>${getTableHeader(headers)}</tr></thead><tbody>${getTableBody(rows)}</tbody>`
}

function getTableHeader(headers) {
    return headers.map((header) => `<th>${header}</th>`).join('');
}

function getTableBody(rows) {
    return rows.map((row) => `<tr>${Object.values(row).map((value) => `<td>${value}</td>`).join('')}</tr>`).join('')
}
