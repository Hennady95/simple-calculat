//переменные кнопок
let buttonOne = document.getElementById('one');
let buttonTwo = document.getElementById('two');
let buttonThree = document.getElementById('three');
let buttonFour = document.getElementById('four');
let buttonFive = document.getElementById('five');
let buttonSix = document.getElementById('six');
let buttonSeven = document.getElementById('seven');
let buttonEight = document.getElementById('eight');
let buttonNine = document.getElementById('nine');
let buttonZero = document.getElementById('zero');

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

//first enter

let enterNumber = document.querySelector('.calculate__display--result');

let showOperation = document.querySelector('.calculate__display--operation');

let buttonPanel = document.querySelector('.calculate__body');

let number = 0;
let secondNumber = 0; //для умножения и деления, но это не точно
let endOperation = true;
let operation = '';

buttonPanel.addEventListener('click', (event) => {
    if(event.target.id === 'one') {
        enterNumber.textContent += '1';
    } else if(event.target.id === 'two') {
        enterNumber.textContent += '2';
    } else if(event.target.id === 'three') {
        enterNumber.textContent += '3';
    } else if(event.target.id === 'four') {
        enterNumber.textContent += '4';
    } else if(event.target.id === 'five') {
        enterNumber.textContent += '5';
    } else if(event.target.id === 'six') {
        enterNumber.textContent += '6';
    } else if(event.target.id === 'seven') {
        enterNumber.textContent += '7';
    } else if(event.target.id === 'eight') {
        enterNumber.textContent += '8';
    } else if(event.target.id === 'nine') {
        enterNumber.textContent += '9';
    } else if(event.target.id === 'zero') {
        enterNumber.textContent += '0';
    } else if(event.target.id === 'clear') { // done
        number = 0;
        operation = '';
        enterNumber.textContent = '';
        showOperation.textContent = '';
    } else if(event.target.id === 'dot') { // done
        enterNumber.textContent += '.';
        /////////////////////////////////////////////////////////
    } else if(event.target.id === 'plus') { //done
        if(operation === 'multiplication') {
            secondNumber *= +enterNumber.textContent;
            number = secondNumber;
        } else if(operation === 'division') {
            secondNumber /= +enterNumber.textContent;
            number = secondNumber;
        } else {
            number += +enterNumber.textContent;
        }
        operation = 'plus';
        showOperation.textContent += `${enterNumber.textContent} + `;
        enterNumber.textContent = '';
    } else if(event.target.id === 'minus') {
        if(operation === 'multiplication') {
            secondNumber *= +enterNumber.textContent;
            number = secondNumber;
        } else if(operation === 'division') {
            secondNumber /= +enterNumber.textContent;
            number = secondNumber;
        } else {
            number -= +enterNumber.textContent;
        }
        operation = 'minus';
        showOperation.textContent += `${enterNumber.textContent} - `;
        enterNumber.textContent = '';
    } else if(event.target.id === 'multiplication') {  // done но нужно сделать красиво
        if(operation === 'multiplication') {
            secondNumber *= +enterNumber.textContent;
            number = secondNumber;
        } else if(operation === 'division') {
            secondNumber /= +enterNumber.textContent;
            number = secondNumber;
        } else {
            secondNumber = +enterNumber.textContent;
        }
        operation = 'multiplication';
        showOperation.textContent += `${enterNumber.textContent} x `;
        enterNumber.textContent = '';
    } else if(event.target.id === 'division') { // done но нужно сделать красиво
        if(operation === 'multiplication') {
            number = secondNumber;
            secondNumber *= +enterNumber.textContent;
            number = secondNumber;
        } else if(operation === 'division') {
            number = secondNumber;
            secondNumber /= +enterNumber.textContent;
            number = secondNumber;
        } else {
            secondNumber = +enterNumber.textContent;
        }
        operation = 'division';
        showOperation.textContent += `${enterNumber.textContent} / `;
        enterNumber.textContent = '';
    } else if(event.target.id === 'percent') { //done
        let percent = 0;
        if(operation === 'multiplication' || operation === 'division') {
             percent = secondNumber / 100 * +enterNumber.textContent;
        } else {
             percent = number / 100 * +enterNumber.textContent;
        }
        enterNumber.innerHTML = percent;    
    } else if(event.target.id === 'plusMin') { //done
        let reverseNumber = 0;
        if(+enterNumber.textContent > 0) {
            reverseNumber = 0 - +enterNumber.textContent
        } else if( +enterNumber.textContent < 0) {
            reverseNumber = -1 * +enterNumber.textContent;
        }
        enterNumber.textContent =  `${reverseNumber}`;
    } else if(event.target.id === 'result') {
        if(enterNumber.textContent.length != 0 && operation === 'plus') {
            number += +enterNumber.textContent;
        } else if(enterNumber.textContent.length != 0 && operation === 'minus') {
            number -= +enterNumber.textContent;
        }  else if(enterNumber.textContent.length != 0 && operation === 'multiplication') {
            number = secondNumber * +enterNumber.textContent;
        } else if(enterNumber.textContent.length != 0 && operation === 'division') {
            number = secondNumber / +enterNumber.textContent;
        } 
        enterNumber.textContent = number;
        showOperation.textContent = '';
        number = 0;
    } 
});
