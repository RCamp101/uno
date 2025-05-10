//10=skip, 11=reverse, 12=+2, 13=blankwild,14=+4wild
let discardPile = sprites.create(img`
    f f f f f f f f f f f f f f f f
    f f f 1 1 1 1 1 1 1 1 1 1 f f f
    f f f 1 f f f f f f f f 1 f f f
    f f f 1 f f f f f f f f 1 f f f
    f f f 1 f f f f f f f f 1 f f f
    f f f 1 f f f f f f f f 1 f f f
    f f f 1 f f f f f f f f 1 f f f
    f f f 1 f f f f f f f f 1 f f f
    f f f 1 f f f f f f f f 1 f f f
    f f f 1 f f f f f f f f 1 f f f
    f f f 1 f f f f f f f f 1 f f f
    f f f 1 f f f f f f f f 1 f f f
    f f f 1 f f f f f f f f 1 f f f
    f f f 1 f f f f f f f f 1 f f f
    f f f 1 1 1 1 1 1 1 1 1 1 f f f
    f f f f f f f f f f f f f f f f
`, SpriteKind.Player)
discardPile.setPosition(80, 60)
let player1Img = sprites.create(img`
    f f f f f f f f f f f f f f f f
    f f f 2 2 2 2 2 2 2 2 2 2 f f f
    f f f 2 2 2 2 2 2 2 2 2 2 f f f
    f f f 2 2 2 2 2 2 2 2 2 2 f f f
    f f f 2 2 2 2 2 2 2 2 2 2 f f f
    f f f 2 2 2 2 2 2 2 2 2 2 f f f
    f f f 2 2 2 2 2 2 2 2 2 2 f f f
    f f f 2 2 2 2 2 2 2 2 2 2 f f f
    f f f 2 2 2 2 2 2 2 2 2 2 f f f
    f f f 2 2 2 2 2 2 2 2 2 2 f f f
    f f f 2 2 2 2 2 2 2 2 2 2 f f f
    f f f 2 2 2 2 2 2 2 2 2 2 f f f
    f f f 2 2 2 2 2 2 2 2 2 2 f f f
    f f f 2 2 2 2 2 2 2 2 2 2 f f f
    f f f 2 2 2 2 2 2 2 2 2 2 f f f
    f f f f f f f f f f f f f f f f
`, SpriteKind.Player)
player1Img.setPosition(8,60)
let player2Img = sprites.create(img`
    f f f f f f f f f f f f f f f f
    f f f 8 8 8 8 8 8 8 8 8 8 f f f
    f f f 8 8 8 8 8 8 8 8 8 8 f f f
    f f f 8 8 8 8 8 8 8 8 8 8 f f f
    f f f 8 8 8 8 8 8 8 8 8 8 f f f
    f f f 8 8 8 8 8 8 8 8 8 8 f f f
    f f f 8 8 8 8 8 8 8 8 8 8 f f f
    f f f 8 8 8 8 8 8 8 8 8 8 f f f
    f f f 8 8 8 8 8 8 8 8 8 8 f f f
    f f f 8 8 8 8 8 8 8 8 8 8 f f f
    f f f 8 8 8 8 8 8 8 8 8 8 f f f
    f f f 8 8 8 8 8 8 8 8 8 8 f f f
    f f f 8 8 8 8 8 8 8 8 8 8 f f f
    f f f 8 8 8 8 8 8 8 8 8 8 f f f
    f f f 8 8 8 8 8 8 8 8 8 8 f f f
    f f f f f f f f f f f f f f f f
`, SpriteKind.Player)
player2Img.setPosition(80, 8)
let player3Img = sprites.create(img`
    f f f f f f f f f f f f f f f f
    f f f 5 5 5 5 5 5 5 5 5 5 f f f
    f f f 5 5 5 5 5 5 5 5 5 5 f f f
    f f f 5 5 5 5 5 5 5 5 5 5 f f f
    f f f 5 5 5 5 5 5 5 5 5 5 f f f
    f f f 5 5 5 5 5 5 5 5 5 5 f f f
    f f f 5 5 5 5 5 5 5 5 5 5 f f f
    f f f 5 5 5 5 5 5 5 5 5 5 f f f
    f f f 5 5 5 5 5 5 5 5 5 5 f f f
    f f f 5 5 5 5 5 5 5 5 5 5 f f f
    f f f 5 5 5 5 5 5 5 5 5 5 f f f
    f f f 5 5 5 5 5 5 5 5 5 5 f f f
    f f f 5 5 5 5 5 5 5 5 5 5 f f f
    f f f 5 5 5 5 5 5 5 5 5 5 f f f
    f f f 5 5 5 5 5 5 5 5 5 5 f f f
    f f f f f f f f f f f f f f f f
`, SpriteKind.Player)
player3Img.setPosition(152, 60)
let player4Img = sprites.create(img`
    f f f f f f f f f f f f f f f f
    f f f 7 7 7 7 7 7 7 7 7 7 f f f
    f f f 7 7 7 7 7 7 7 7 7 7 f f f
    f f f 7 7 7 7 7 7 7 7 7 7 f f f
    f f f 7 7 7 7 7 7 7 7 7 7 f f f
    f f f 7 7 7 7 7 7 7 7 7 7 f f f
    f f f 7 7 7 7 7 7 7 7 7 7 f f f
    f f f 7 7 7 7 7 7 7 7 7 7 f f f
    f f f 7 7 7 7 7 7 7 7 7 7 f f f
    f f f 7 7 7 7 7 7 7 7 7 7 f f f
    f f f 7 7 7 7 7 7 7 7 7 7 f f f
    f f f 7 7 7 7 7 7 7 7 7 7 f f f
    f f f 7 7 7 7 7 7 7 7 7 7 f f f
    f f f 7 7 7 7 7 7 7 7 7 7 f f f
    f f f 7 7 7 7 7 7 7 7 7 7 f f f
    f f f f f f f f f f f f f f f f
`, SpriteKind.Player)
player4Img.setPosition(80, 112)
class UNOCard{
    myColor:String
    myNumber: number

    setColor(newColor:String)
    {
        this.myColor=newColor
    }
    setNumber(newNumber:number){
        this.myNumber=newNumber
    }

    toString(){
        return this.myColor+this.myNumber.toString()
    }
}
let deckOfCards:UNOCard[]=[]
let colors =["R","G","B","Y","W"]
let numbers=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
for (let c = 0; c < colors.length-1; c++) {
    for (let n = 0; n < numbers.length-2; n++) {
        let newCard=new UNOCard()
        newCard.setColor(colors[c])
        newCard.setNumber(numbers[n])
        deckOfCards.push(newCard)
    }
}
for (let c = 0; c < colors.length-1; c++) {
    for (let n = 1; n < numbers.length - 2; n++) {
        let newCard = new UNOCard()
        newCard.setColor(colors[c])
        newCard.setNumber(numbers[n])
        deckOfCards.push(newCard)
    }
}


for (let n = 0; n < 4; n++) {
    let newCard = new UNOCard()
    newCard.setColor(colors[4])
    newCard.setNumber(numbers[13])
    deckOfCards.push(newCard)
    
}
for (let n = 0; n < 4; n++) {
    let newCard = new UNOCard()
    newCard.setColor(colors[4])
    newCard.setNumber(numbers[14])
    deckOfCards.push(newCard)

}
console.log(deckOfCards)
for (let i = 0; i < 10000; i++) {
    let index1 = randint(0, deckOfCards.length - 1)
    let index2 = randint(0, deckOfCards.length - 1)
    let hold = deckOfCards[index1]

    deckOfCards[index1] = deckOfCards[index2]
    deckOfCards[index2] = hold

    
}

let player1Hand: UNOCard[] = []
let player2Hand: UNOCard[] = []
let player3Hand: UNOCard[] = []
let player4Hand: UNOCard[] = []
let playedCards: UNOCard[] = []
function drawCard (myHand:UNOCard[]){
    myHand.push(deckOfCards.pop())
}

function firstDeal (){
  
    for (let i = 0; i < 7; i++) {
        drawCard(player1Hand)
        drawCard(player2Hand)
        drawCard(player3Hand)
        drawCard(player4Hand)
    }
drawCard(playedCards)
}

firstDeal()
game.onUpdateInterval(50, function() {
    let x=playedCards.length-1
    discardPile.sayText(playedCards[x])
})

game.onUpdateInterval(500, function () {
    player1Img.sayText(player1Hand)
    player2Img.sayText(player2Hand)
    player3Img.sayText(player3Hand)
    player4Img.sayText(player4Hand)
})


function playCard(currentPlayer:UNOCard[]){
    let x=game.askForNumber("Which Card? 0=1st card and count up")
    playedCards.push(currentPlayer[x])
    currentPlayer[x] = deckOfCards.pop()
}

controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
playCard(player1Hand)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    playCard(player2Hand)
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    playCard(player3Hand)
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    playCard(player4Hand)
})




function declareWildCard(myCard:UNOCard){
    let newColor = game.askForString("Choose a new color:R,B,Y,G")
    while (newColor != "R" && newColor != "G" && newColor != "Y" && newColor != "Y") {
        newColor = game.askForString("Choose a new color:R,B,Y,G")
    }
    myCard.setColor(newColor)
}












