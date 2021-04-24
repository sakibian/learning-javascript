// Un-initialize variables. 
// let currentResult;

// Initialize variables.
const defaultResult = 0;
// Global variable
let currentResult = defaultResult;

// + Add function
function add() {
  // Global variable initialize
  currentResult = currentResult + parseInt(userInput.value); // another way to convert + +userInput.value
  // Output Results
  outputResult(currentResult, '');
}

addBtn.addEventListener('click', add);




