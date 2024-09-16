const inputNumber = document.getElementById("inputNumber");
const btnAdicionar = document.getElementById("btnAdicionar");
const valueList = document.getElementById("valueList");
const average = document.getElementById("average");

let valores = [];

function addValor() {
    let value = parseFloat(inputNumber.value);

    if (!isNaN(value)) {
        valores.push(value);

        
        inputNumber.value = '';

        
        updateDisplay();
    }
}


function updateDisplay() {
    
    if (valores.length > 0) {
        valueList.textContent = valores.join('\n');

        
        let sum = valores.reduce((acc, val) => acc + val, 0);
        let averageValue = sum / valores.length;

        
        average.textContent = averageValue.toFixed(2);
    } else {
        valueList.textContent = 'Nenhum valor inserido ainda.';
        average.textContent = '0';
    }
}

btnAdicionar.addEventListener('click', addValor);
