const Table = require('cli-table3');

function displayTable(tableName, rows) {
    const table = new Table();
    const columnNames = Object.keys(rows[0]);

    table.push(columnNames);

    rows.forEach((row) => {
        const rowData = columnNames.map((columnName) => row[columnName]);
        table.push(rowData);
    });

    console.log(`\n${tableName}`);
    console.log(table.toString());
}

module.exports = displayTable;