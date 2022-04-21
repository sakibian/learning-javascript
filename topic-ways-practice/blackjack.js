//BlackJack Game Practice
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
// let sumEl = document.querySelector("#sum-el")
console.log(cards)
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }

}

function startGame(){
    let isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    // render out firstCard and secondCard
    cardsEl.textContent = "Cards: "
    // need to render out all the cards we have
    sumEl.textContent = "Sum: " + sum
    // Loop cards
    for(i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    if(sum <= 20)  {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Backjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message 
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
    
}

// 03:42:17

// The Logical AND Operator
// let hasCompletedCourse = true
// let givesCertificate = true

// if(hasCompletedCourse === true) {
//     if(givesCertificate == true) {
//         generateCertificate()
//     }
// }
// AND &&
// if(hasCompletedCourse === true && givesCertificate === true) {
//     generateCertificate()
// }

// OR ||
// if(hasCompletedCourse === true || givesCertificate === false) {
//     generateCertificate()
// }

// function generateCertificate() {
//     console.log("Generating certificate....")
// }

// let hasSolvedChallenge = false
// let hasHintsleft = false

// AND &&
// if(hasSolvedChallenge === false && hasHintsleft === false) {
//     showSolution()
// }

// OR ||
// if(hasSolvedChallenge === false || hasHintsleft === false) {
//     showSolution()
// }


// function showSolution() {
//     console.log("Showing the solution.....")
// }

// let likesDocumentaries = false
// let likeStartups = false

// if(likesDocumentaries === true || likeStartups === true) {
//     recommendMovie()
// }

// function recommendMovie(){
//     console.log("Hey, Check out this new film, We think you will like it.")
// }

// 3:51:57 Second

