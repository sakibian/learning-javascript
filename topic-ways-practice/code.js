// Variable Practice
// let firstName = "Bakibillah"
// let lastName = "Sakib"
// let fullName = firstName + " " +lastName
// console.log(fullName)

// Function Practice
let personName = "Linda"
let personGreeting = "Hi there"

function greetLinda() {
    let welcome = personGreeting + "," + personName + "!"
    console.log(welcome)
}

greetLinda();

// Increment/Decrement Practice
let myPoints = 3

function add3Points(){
    myPoints += 3
}

function remove1Point(){
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()

console.log(myPoints)

// String & Number Practice
console.log("2" + 2) // "22"
console.log(11 + 7) // 18
console.log(6 + "5") // "65"
console.log("My points: " + 5 + 9) // "59"
console.log(2 + 2) // 4
console.log("11" + "14") // "1114"

// Rendaring an error message
let errorEl = document.getElementById('error')
function purchase(){
    errorEl.textContent = "Something went wrong, please try again"
}
// Calculator Practice
let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el") 
function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum " + result
}

function substract(){
    let result = num1 - num2
    sumEl.textContent = "Sum " + result
}

function divide(){
    let result = num1 / num2
    sumEl.textContent = "Sum " + result
}

function multiply(){
    let result = num1 * num2
    sumEl.textContent = "Sum " + result
}


// Blackjack Game

let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard + 6

if(sum < 21) {
    console.log("Draw a card?")
} else if(sum === 21) {
    console.log("Got BlackJack")
}else {
    console.log("Out of the game")
}

let age = 21

// if(age <= 20) - What will happen in this scinario I dont understand
if(age < 20) {
    console.log("You cannot enter the club")
} else {
    console.log("Welcome")
}

let age = 100

if (age < 100) {
    console.log("Not elegible")
} else if (age === 100) {
    console.log("Here is your gift from Allah")
} else {
    console.log("Not elegible, you have already gotten one")
}

console.log(4 === 3) // false
console.log(5 > 2) // true
console.log(12 > 12) // false
console.log(3 < 0) // false
console.log(3 >= 3) // true
console.log(11 <= 11) // true
console.log(3 <= 2) // false

// Arrays - ordered lists of item
// Arrays are 0 index
let featuredPosts = [
    "Check out my netflix clone", 
    "Here is the code for my project",
    "I've just relaunched my portfolio"
]

// console.log(featuredPosts[0])

let experience = [
    "CEO of Sakibian",
    "Web Developer at BlazeChannel",
    "Creator of Kibbs.com",
    "Creator of JMTAvia.com"
]
console.log(experience[3]);
console.log(experience[2]);
console.log(experience[0]);
console.log(experience[1]);

let cards2 = [6, 7]
cards2.push(8)
console.log(cards2)

let messages1 = [
    "Hey, How are you?",
    "I'm good btw what's your name",
    "Well, My name is Bakibillah Sakib"
]

let newMessage = "Good good, Where are you from Sakib?"
messages1.push(newMessage)
console.log(messages1)
messages1.pop()
console.log(messages1)
// let sakib = ["Syed Bakibillah Sakib", 32, true]

// For Loop

for (let count = 10; count < 21; count += 1) {
    console.log(count)
}

for (let count = 0; count < 6; count += 1) {
    console.log(count)
}

for(let i = 10; i < 101; i += 10) {
    console.log(i)
}

let messages = [
    "Hey, How are you?",
    "I'm good btw what's your name",
    "Well, My name is Bakibillah Sakib",
    "Nice to meet you Sakib",
    "Where are you from Sakib?"
]

for(i = 0; i < messages.length; i++ ) {
    console.log(messages[i]);
}

let myCards = [7, 3, 9]
for(let i = 0; i < myCards.length; i++) {
    console.log(myCards[i])
}

// 03:05:58Sec

let sentence = ["Hello ", "my ", "name ", "is ", "Bakibillah Sakib"]
let greetingEl = document.getElementById("greeting-el")

for(let i = 0; i <sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
}

// Returning values in functions

let player1Time = 102
let player2Time = 107

function getFastestRaceTime(){
    if (player1Time < player2Time){
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

function raceTimeCount(){
    return player1Time + player2Time
}
let fastestRace = getFastestRaceTime()
let totalRaceTime = raceTimeCount()
console.log(totalRaceTime)

// Generating random numbers with Math.random()
let randomNumber = Math.floor(Math.random() * 6) + 1
// Math.floor()
let flooredNumber = Math.floor(8.76534)
// Math.random() generates number between 0 and 1 (not inclusive of 1) 
console.log(randomNumber)
// From: adding * 6 to Math.random() - it 
// will generate 0 - 6 random numbers (not inclusive 6 that means 5.999) 
// From: 0 - 1 = (0.999)
// To: 0 - 6 = (5.999) 

function rollDice(){
    // let randomNumber = Math.floor(Math.random() * 12) + 1
    // return randomNumber
    return Math.floor(Math.random() * 13) + 1
}
console.log(rollDice())