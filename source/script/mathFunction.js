function getMathFunction(operation, firstNumber, secondnumber) {
    if(operation === 'multiplication') {
        firstNumber *= secondNumber;
    } else if(operation === 'division') {
        firstNumber /= secondNumber;
    } else if(operation === 'minus') {
        firstNumber -= secondNumber;
    } else if(operation === 'plus') {
        firstNumber += secondNumber;
    } else {
        firstNumber = secondnumber;
    }
    return firstNumber;
}

function getPercent(operation, firstNumber, secondNumber) {
    if(operation === 'multiplication') {
        firstNumber *= (secondNumber / 100);
    } else if(operation === 'division'){
        firstNumber /= (secondNumber / 100);
    } else if(operation === 'plus'){
        firstNumber += firstNumber / 100 * secondNumber ;
    } else if(operation === 'minus'){
        firstNumber -= firstNumber / 100 * secondNumber;
    } else {
        firstNumber = secondNumber / 100;
    }
    return +firstNumber.toFixed(2);
}

function getResult(operation, firstNumber, secondNumber) {
    if(operation === 'plus') {
        firstNumber += secondNumber;
    } else if(operation === 'minus') {
        firstNumber -= secondNumber;
    }  else if(operation === 'multiplication') {
        firstNumber  *= secondNumber;
    } else if(operation === 'division') {
        firstNumber /= secondNumber;
    } else if(operation === 'percent') {
        firstNumber = firstNumber ;
    }
    return +firstNumber.toFixed(2); 
    
}

export {getMathFunction, getPercent, getResult};