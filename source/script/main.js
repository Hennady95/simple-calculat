import { getMathFunction, getResult, getPercent } from './mathFunction.js';

let enterNumber = document.querySelector('.calculate__display--number');
let showOperation = document.querySelector('.calculate__display--operation');
let showResult = document.querySelector('.calculate__display--result');
let buttonPanel = document.querySelector('.calculate__body');

let number = 0;
let operation = '';

buttonPanel.addEventListener('click', (event) => {
    if(event.target.classList.contains('button--number')) {
     enterNumber.textContent += event.target.textContent;
    } else if(event.target.id === 'clear') { 
        number = 0;
        operation = '';
        enterNumber.textContent = '';
        showOperation.textContent = '';
    } else if(event.target.id === 'plus'  && enterNumber.textContent.length != 0 ) {
        console.log(number);
        number = getMathFunction(operation, number, +enterNumber.textContent);
        showOperation.textContent += `${+enterNumber.textContent} + `;
        console.log('qwe' + number);
        operation = 'plus';
        enterNumber.textContent = '';
    } else if(event.target.id === 'minus' && enterNumber.textContent.length != 0 ) {
        number = getMathFunction(operation, number, +enterNumber.textContent);
        showOperation.textContent += `${+enterNumber.textContent} - `;
        operation = 'minus';
        enterNumber.textContent = '';
    } else if(event.target.id === 'multiplication'  && enterNumber.textContent.length != 0 ) {  
        number = getMathFunction(operation, number, +enterNumber.textContent);
        showOperation.textContent += `${+enterNumber.textContent} x `;
        operation = 'multiplication';
        enterNumber.textContent = '';
    } else if(event.target.id === 'division'  && enterNumber.textContent.length != 0 ) {
        number = getMathFunction(operation, number, +enterNumber.textContent);
        showOperation.textContent += `${+enterNumber.textContent} / `;
        operation = 'division';
        enterNumber.textContent = '';
    } else if(event.target.id === 'percent') {
        console.log(number);
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
        operation = '';
    } 
});