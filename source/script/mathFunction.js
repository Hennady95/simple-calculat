import {showOperation, enterNumber, number, secondNumber, showResult} from './script.js';

function getOperation(operation, symbol, number, secondNumber) {
    if(operation === 'multiplication') {
        secondNumber *= +enterNumber.textContent;
        number = secondNumber;
    } else if(operation === 'division') {
        secondNumber /= +enterNumber.textContent;
        number = secondNumber;
    } else if(operation === 'minus') {
        number -= +enterNumber.textContent;
    } else if(operation === 'plus') {
        number += +enterNumber.textContent;
    } else {
        number = +enterNumber.textContent;
    }
    showOperation.textContent += `${enterNumber.textContent} ${symbol} `;
    enterNumber.textContent = '';
}

function getMultAndDivision(operation, symbol) {
    if(operation === 'multiplication') {
        secondNumber *= +enterNumber.textContent;
    } else if(operation === 'division' ) {
        secondNumber /= +enterNumber.textContent;
    } else if(operation === 'minus' ) {
        secondNumber -= +enterNumber.textContent;
    } else if(operation === 'plus' ) {
        secondNumber += number + +enterNumber.textContent;
    } else {
        secondNumber = +enterNumber.textContent;
    }
    showOperation.textContent += `${enterNumber.textContent} ${symbol} `;
    enterNumber.textContent = '';
}

function getPercent(operation) {
    console.log(number);
    if(operation === 'multiplication') {
        number = secondNumber * (+enterNumber.textContent / 100);
    } else if(operation === 'division'){
         number = secondNumber / (+enterNumber.textContent / 100);
    } else if(operation === 'plus'){
         number += number / 100 * +enterNumber.textContent ;
    } else if(operation === 'minus'){
        number -= number / 100 * +enterNumber.textContent;
    } else {
        number = +enterNumber.textContent / 100;
    }
    number = +number.toFixed(2);
    showOperation.textContent += `${enterNumber.textContent} % `;
    enterNumber.textContent = ''; 
}

function getResult(operation) {
    if(enterNumber.textContent.length != 0 && operation === 'plus') {
        number += +enterNumber.textContent;
    } else if(enterNumber.textContent.length != 0 && operation === 'minus') {
        number -= +enterNumber.textContent;
    }  else if(enterNumber.textContent.length != 0 && operation === 'multiplication') {
        number = secondNumber * +enterNumber.textContent;
    } else if(enterNumber.textContent.length != 0 && operation === 'division') {
        number = secondNumber / +enterNumber.textContent;
    } else if(enterNumber.textContent.length != 0 && operation === 'percent') {
        number = number / 100 * +enterNumber.textContent;
    }
    number = +number.toFixed(2); 
    showResult.textContent = number;
    showOperation.textContent = '';
    enterNumber.textContent = '';
    number = 0;
    secondNumber = 0;
    operation = '';
}

export {getOperation, getMultAndDivision, getPercent, getResult};