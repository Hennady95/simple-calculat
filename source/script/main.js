import { getMathFunction, getResult, getPercent } from './mathFunction.js';

let enterNumber = document.querySelector('.calculate__display--number');
let showOperation = document.querySelector('.calculate__display--operation');
let showResult = document.querySelector('.calculate__display--result');
let buttonPanel = document.querySelector('.calculate__body');

let number = 0;
let weightNumber = 0;
let operation = '';

buttonPanel.addEventListener('click', (event) => {
    if(event.target.classList.contains('button--number')) {
     if(weightNumber < 10) {
        enterNumber.textContent += event.target.textContent;
        weightNumber++;
     }
    } else if(event.target.id === 'clear') { 
        number = 0;
        operation = '';
        enterNumber.textContent = '';
        showOperation.textContent = '';
    } else if(event.target.id === 'plus'  && enterNumber.textContent) {
        number = getMathFunction(operation, number, +enterNumber.textContent, enterNumber, showOperation, '+');
        operation = 'plus';
        weightNumber = 0;
    } else if(event.target.id === 'minus' && enterNumber.textContent) {
        number = getMathFunction(operation, number, +enterNumber.textContent, enterNumber, showOperation, '-');
        operation = 'minus';
        weightNumber = 0;
    } else if(event.target.id === 'multiplication'  && enterNumber.textContent) {  
        number = getMathFunction(operation, number, +enterNumber.textContent, enterNumber, showOperation, 'x');
        operation = 'multiplication';
        weightNumber = 0;
    } else if(event.target.id === 'division'  && enterNumber.textContent) {
        number = getMathFunction(operation, number, +enterNumber.textContent, enterNumber, showOperation, '/');
        operation = 'division';
        weightNumber = 0;
    } else if(event.target.id === 'percent') {
        number = getPercent(operation, number, +enterNumber.textContent);
        operation = 'percent';
        showOperation.textContent += `${+enterNumber.textContent} % `;
        enterNumber.textContent = ''; 
    } else if(event.target.id === 'plusMin') { 
        enterNumber.textContent =  +enterNumber.textContent * (-1);
    } else if(event.target.id === 'result') {
        number = getResult(operation, number, +enterNumber.textContent);
        showResult.textContent = number;
        showOperation.textContent = '';
        enterNumber.textContent = '';
        number = 0;
        weightNumber = 0;
        operation = '';
    } 
});