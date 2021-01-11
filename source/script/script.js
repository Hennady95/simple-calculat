//import { getOperation, getMultAndDivision, getPercent, getResult } from './mathFunction.js';

import { getOperation } from './mathFunction.js';
import { getPercent } from './mathFunction.js';
import { getMultAndDivision } from './mathFunction.js';
import { getResult } from './mathFunction.js';

//переменные операций
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let division = document.getElementById('division');
let multiplication = document.getElementById('multiplication');
let percent = document.getElementById('percent');
let plusMin = document.getElementById('plusMin');
let clear = document.getElementById('clear');
let dot = document.getElementById('dot');
let result = document.getElementById('result');

export let enterNumber = document.querySelector('.calculate__display--number');

export let showOperation = document.querySelector('.calculate__display--operation');

export let showResult = document.querySelector('.calculate__display--result');

let buttonPanel = document.querySelector('.calculate__body');

export let number = 0;
export let secondNumber = 0;
let operation = '';

/*function getOperation(operation, symbol) {
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
}*/

buttonPanel.addEventListener('click', (event) => {
    if(event.target.classList.contains('button--number')) {
     enterNumber.textContent += event.target.textContent;
    } else if(event.target.id === 'clear') { 
        number = 0;
        operation = '';
        enterNumber.textContent = '';
        showOperation.textContent = '';
    } else if(event.target.id === 'plus'  && enterNumber.textContent.length != 0 ) { 
        getOperation(operation, '+')
        operation = 'plus';
    } else if(event.target.id === 'minus' && enterNumber.textContent.length != 0 ) {
        getOperation(operation, '-')
        operation = 'minus';
    } else if(event.target.id === 'multiplication'  && enterNumber.textContent.length != 0 ) {  
        getMultAndDivision(operation, 'x');
        operation = 'multiplication';
    } else if(event.target.id === 'division'  && enterNumber.textContent.length != 0 ) {
        getMultAndDivision(operation, '/')
        operation = 'division';
    } else if(event.target.id === 'percent') {
        getPercent(operation);
        operation = 'percent';
    } else if(event.target.id === 'plusMin') { 
        enterNumber.textContent =  +enterNumber.textContent * (-1);
    } else if(event.target.id === 'result') {
        getResult(operation);
    } 
});