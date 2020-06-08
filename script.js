'use strict';

let idTable = 'CarTable';
let idForm = 'AddNewCarInTable';

let carTable = document.getElementById(idTable);
let form = document.getElementById(idForm);

let selectedColumn = -1;

function sortCarTable (index, dataType, tableIsSorted) {
    const tbody = carTable.querySelector('tbody');
    function compareRows (firstRow, secondRow){
        const dataFirstRow = firstRow.cells[index].innerHTML;
        const dataSecondRow = secondRow.cells[index].innerHTML;
        switch (dataType) {
            case 'integer': {
                return dataFirstRow - dataSecondRow;
            }
            case 'text': {
                if (dataFirstRow < dataSecondRow)
                    return -1;
                if (dataFirstRow > dataSecondRow)
                    return 1;
                return 0;
            }
        }
    }

    let rows = [].slice.call(tbody.rows);
    rows.sort(compareRows);
    if (tableIsSorted)
        rows.reverse();

    carTable.removeChild(tbody);
    for (let i = 0; i < rows.length; i++){
        tbody.appendChild(rows[i]);
    }
    carTable.appendChild(tbody);
}
