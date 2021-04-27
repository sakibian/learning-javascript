const defaultResult = 0;
let currentResult = defaultResult;
// Global array
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  // another way to convert (+ +userInput.value )
  return parseInt(userInput.value);
}

// Generate and writes calculation log
function createAndWriteOutPut(operator, resultBeforeCalc, calcNumber){
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier, 
  prevResult,
  operationNumber,
  newResult
  ) {
    const logEntry = {
      operation: operationIdentifier,
      prevResult: prevResult,
      number: operationNumber,
      result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
  }

// Add function (+)
function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult; 
  currentResult += enteredNumber;
  // currentResult++ (currentResult +1)
  createAndWriteOutPut('+', initialResult, enteredNumber);
  writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

// Substract function (-)
function substract(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult; 
  currentResult -= enteredNumber;
  // currentResult-- (currentResult -1)
  createAndWriteOutPut('-', initialResult, enteredNumber);
  writeToLog('SUBSTRACT', initialResult, enteredNumber, currentResult);
}

// Multiply function (*)
function multiply(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult; 
  currentResult *= enteredNumber;
  // currentResult** (currentResult *1)
  createAndWriteOutPut('*', initialResult, enteredNumber);
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

// Divition function (/)
function divide(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult; 
  currentResult /= enteredNumber;
  createAndWriteOutPut('/', initialResult, enteredNumber);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

// Events
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);



