const defaultResult = 0;
let currentResult = 0;
let logEntries = [];
// let entryCount = 0;

function getEnteredNumber(){
    const enteredNumber = parseInt(userInput.value);
    return enteredNumber;
}

function createAndWriteOutput(operator,resultBefore, enteredNumber){
    const calcDescription = `${resultBefore} ${operator} ${enteredNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

function createAndWriteLogarithmOutput(enteredNumber,resultBefore){
    var base = new String(enteredNumber);
    const calcDescription = `log ${base}(${resultBefore})`;
    outputResult(currentResult,calcDescription);
}

function writeToLog(operationIdentifier, 
    prevResult, 
    operationNumber,
    newResult
    ){
        const logEntry = {
            operation: operationIdentifier,
            prevResult: prevResult,
            number: operationNumber,
            result: newResult
        };
        logEntries.push(logEntry);
        console.log(logEntries);
}



function calculate(calculationType){
    enteredNumber = getEnteredNumber();
    if (calculationType !== 'ADD' && 
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE' &&
    calculationType !== 'EXPONENT' &&
    calculationType !== 'REMAINDER'&&
    calculationType !== 'LOGARITHM' || 
    !enteredNumber
    ){
        return;
    }

    const initialResult = currentResult;
    let mathOperator;

    switch (calculationType) {
        case 'ADD':
            currentResult += enteredNumber;
            mathOperator = '+';
            break;
        case 'SUBTRACT':
            currentResult -= enteredNumber;
            mathOperator = '-';
            break;
        case 'MULTIPLY':
            currentResult *= enteredNumber;
            mathOperator = '*';
            break;
        case 'DIVIDE':
            currentResult /= enteredNumber;
            mathOperator = "/";
            break;
        case 'EXPONENT':
            currentResult **= enteredNumber;
            mathOperator = "^";
            break;
        case 'REMAINDER':
            currentResult %= enteredNumber;
            mathOperator = "%";
            break;
        default:
            currentResult = Math.log(currentResult) / Math.log(enteredNumber);
            createAndWriteLogarithmOutput(enteredNumber,initialResult);
            writeToLog('LOGARITHM',initialResult,enteredNumber,currentResult);
            return;
    }


    createAndWriteOutput(mathOperator,initialResult,enteredNumber);
    writeToLog(calculationType,initialResult,enteredNumber,currentResult);
}

function logarithm(){
    const initialResult = currentResult;
    currentResult = Math.log(currentResult) / Math.log(10);
    createAndWriteLogarithmOutput(10,initialResult);
    writeToLog('LOGARITHM',initialResult,10,currentResult);
}


addBtn.addEventListener('click', calculate.bind(this,'ADD'));
subtractBtn.addEventListener('click',calculate.bind(this,'SUBTRACT'));
multiplyBtn.addEventListener('click',calculate.bind(this,'MULTIPLY'));
divideBtn.addEventListener('click',calculate.bind(this,'DIVIDE'));
exponentBtn.addEventListener('click',calculate.bind(this,'EXPONENT'));
remainderBtn.addEventListener('click',calculate.bind(this,'REMAINDER'));
logarithmBtn.addEventListener('click',logarithm);





