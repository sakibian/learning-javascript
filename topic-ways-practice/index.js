//document.getElementById('counter-el').innerText = 5

// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)

// let myAge = 31
// let humanDogRatio = 7

// let count = myAge * humanDogRatio
// console.log(count)

// let count = 5

// count = count + 2

// count = count + 5

// console.log(count)

// // Init
// let bonusPoint = 50
// console.log(bonusPoint)

// //Increased
// bonusPoint = bonusPoint + 50
// console.log(bonusPoint)

// //Decreased
// bonusPoint = bonusPoint - 75
// console.log(bonusPoint)

// //Increased again
// bonusPoint = bonusPoint + 45
// console.log(bonusPoint)

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()

// countdown()

// Click Event
// function increment() {
//     console.log('The button is clicked!!!')
// }


// function fortyTwo() {
//     console.log(42)
// }

// fortyTwo();

// Block Scope
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function total() {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(lap1 + lap2 + lap3);
// }

// console.log(totalTime)
// total();

// let lapsCompleted = 0

// function lapIncrement() {
//     lapsCompleted = lapsCompleted + 1
// }

// lapIncrement()
// lapIncrement()
// lapIncrement()

// console.log(lapsCompleted)

// Working Script start
//camelCase
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0;

function increment() {
    // Long form
    // count = count + 1
    // Short form
    count += 1
    countEl.textContent = count
}

function reset() {
    count = 0
    countEl.textContent = count
}
 
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
// Working Script End

//String
// let username = "Sakib"
// let message = "You have three new notifications"
// let messageToUser = message + ", " + username + "!" 
// console.log(messageToUser)

// let name = "Bakibillah Sakib"
// let greeting = "Hello, my name is "

// let myGreeting = greeting + name + "!"
// console.log(myGreeting)

//String vs Number
// console.log(4 + 5)
// console.log("2" + "4")
// console.log("5" + 1)
// console.log("100" + 100)

// 56:31 

// Greeting test

let welcomeEl = document.getElementById('welcomeEl')
let name = 'Bakibillah Sakib'
let greeting = 'Welcome back '

welcomeEl.innerText = greeting + name
// Long 
// welcomeEl.innerText = welcomeEl.innerText + "Emoji"
// Short
// welcomeEl.innerText += " Emoji"



