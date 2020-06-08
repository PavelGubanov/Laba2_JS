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

function addCellInCarTable (row, value) {
    row.insertCell(-1).appendChild(document.createTextNode(value));
}

function addRowInCarTable () {
    let model = document.getElementById('inputModel');
    let enginePower = document.getElementById('inputEnginePower');
    let trunkVolume = document.getElementById('inputTrunkVolume');
    let clearance = document.getElementById('inputClearance');
    let cost = document.getElementById('inputCost');

    if ((model.value != '') && (parseInt(enginePower.value)) &&
        (parseInt(trunkVolume.value)) && (parseInt(clearance.value)) &&
        (parseInt(cost.value)))
    {
        let row = carTable.getElementsByTagName('tbody')[0].insertRow(-1);
        addCellInCarTable(row, model.value);
        addCellInCarTable(row, enginePower.value);
        addCellInCarTable(row, trunkVolume.value);
        addCellInCarTable(row, clearance.value);
        addCellInCarTable(row, cost.value);

        let deleteButton = document.createElement( "button");
        deleteButton.innerHTML = '<img src = "TrashCan.png" alt = "Удалить">';
        row.insertCell(-1).appendChild(deleteButton);

        model.value = '';
        enginePower.value = '';
        trunkVolume.value = '';
        clearance.value = '';
        cost.value = '';
    }
    else
    {
        alert('Ошибка! Необходимо все поля заполнить корректными значениями!');
    }
}