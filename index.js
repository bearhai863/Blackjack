// javascript

let cards =[]
let sum = 0
let sum11 = 0
let cardEl = document.querySelector("#card-el")
let sumEl = document.querySelector("#sum-el")
let messageEl = document.querySelector("#message-el")
let hasBlackJack = false
let gameOver = false

let person = {
    name: "Jerax",
    chips: 500,
}

let playerEl = document.querySelector("#player-el")

function getRandomCard (){
    let randomCard = Math.floor(Math.random()*13 )+ 1
    
    if (randomCard > 10){
        return randomCard = 10
    }else if(randomCard === 1){
        return randomCard = 11
    }else{
        return randomCard
    }
}


function startGame(){
    if(person.chips > 0){
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        hasBlackJack = false // reassign boolean to initial value
        gameOver = false // because boolean value will be assign to diff value after  print function
        printAllValue()
    }else{
        messageEl.textContent = "You are bankrupt, Leave!"
    }
}


function printAllValue(){
    
    cardEl.textContent = "Cards: " // debug the repeated log after newCard
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }//print cards on hand
    
    sumEl.textContent = "Sum: " + sum //print sum
    
    if(sum === 21){
        messageEl.textContent = "You've got Blackjack!"
        hasBlackJack = true
        person.chips += 50
    }else if(sum > 21){
        messageEl.textContent = "You are out of the game!"
        gameOver = true
        person.chips -= 50
    }else{
        messageEl.textContent = "Do you want to draw a new card?"
    } //print message 
    
    playerEl.textContent = person.name + ": $" + person.chips
    
}


function newCard(){
    
    if(hasBlackJack === false && gameOver === false){
        let drawCard = getRandomCard()
        cards.push(drawCard)
        sum += drawCard
        printAllValue()
    }
    
}
