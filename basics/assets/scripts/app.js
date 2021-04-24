// Un-initialize variables. 
// let currentResult;

// Initialize variables.
const defaultResult = 0;
let currentResult;

// + Add function
function add(num1, num2) {
  const result = num1 + num2;
  return result;
}


// Calling the function
currentResult = add(1, 2);

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);


