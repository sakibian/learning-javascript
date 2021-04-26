const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  // another way to convert (+ +userInput.value )
  return parseInt(userInput.value);
}

function createAndWriteOutPut(operator, resultBeforeCalc, calcNumber){
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult; 
  currentResult = currentResult + enteredNumber;
  createAndWriteOutPut('+', initialResult, enteredNumber);
}

function substract(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult; 
  currentResult = currentResult - enteredNumber;
  createAndWriteOutPut('-', initialResult, enteredNumber);
}

function multiply(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult; 
  currentResult = currentResult * enteredNumber;
  createAndWriteOutPut('*', initialResult, enteredNumber);
}

function divide(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult; 
  currentResult = currentResult / enteredNumber;
  createAndWriteOutPut('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);



