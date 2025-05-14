//10=skip, 11=reverse, 12=+2, 13=blankwild,14=+4wild
function arrayToString(array: any[]) {
    let result = "";
    for (let i = 0; i < array.length; i++) {
        if (i > 0) {
            result += ","
        }
        result += array[i].toString()
    }
    return result
}
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
let playerImg = sprites.create(assets.image`Player1`, SpriteKind.Player)
playerImg.setPosition(80, 110)
class UNOCard{
    myColor:String
    myNumber: Number

    setColor(newColor:String)
    {
        this.myColor=newColor
    }
    getColor() {
        return this.myColor
    }

    setNumber(newNumber:Number){
        this.myNumber=newNumber
    }
    getNumber() {
        return this.myNumber
    }

    toString(){
        return this.myColor+this.myNumber.toString()
    }
}


game.onUpdateInterval(500, function() {
    lastPlayedCard = playedCards[playedCards.length - 1]

})
let deckOfCards:UNOCard[]=[]
let colors =["R","G","B","Y","W"]
let numbers=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
function makeADeck(){
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
    shuffle(deckOfCards)
}
makeADeck()
function shuffle(handToShuffle: UNOCard[]){
    for (let i = 0; i < 5000; i++) {
        let index1 = randint(0, handToShuffle.length - 1)
        let index2 = randint(0, handToShuffle.length - 1)
        let hold = handToShuffle[index1]

        handToShuffle[index1] = handToShuffle[index2]
        handToShuffle[index2] = hold
    }
}
let player1Hand: UNOCard[] = []
let player2Hand: UNOCard[] = []
let player3Hand: UNOCard[] = []
let player4Hand: UNOCard[] = []
let player5Hand: UNOCard[] = []
let player6Hand: UNOCard[] = []
let player7Hand: UNOCard[] = []
let player8Hand: UNOCard[] = []
let player9Hand: UNOCard[] = []
let player10Hand: UNOCard[] = []
let playedCards: UNOCard[] = []
let lastPlayedCard = playedCards[playedCards.length - 1]

function drawCard (myHand:UNOCard[]){
    myHand.push(deckOfCards.pop())
}
let numberOfPlayers = game.askForNumber("How many players? 2-10", 2,false)
function firstDeal (){
  for (let i = 0; i < 7; i++) {
        drawCard(player1Hand)
        drawCard(player2Hand)
      if (numberOfPlayers >= 3) {
          drawCard(player3Hand)
          if (numberOfPlayers >= 4) {
              drawCard(player4Hand)
              if (numberOfPlayers >= 5) {
                  drawCard(player5Hand)
                  if (numberOfPlayers >= 6) {
                      drawCard(player6Hand)
                      if (numberOfPlayers >= 7) {
                          drawCard(player7Hand)
                          if (numberOfPlayers >= 8) {
                              drawCard(player8Hand)
                              if (numberOfPlayers >= 9) {
                                  drawCard(player9Hand)
                                  if (numberOfPlayers = 10) {
                                      drawCard(player10Hand)
                                  }

                              } 

                          } 

                      } 

                  } 

              } 

          } 

      }

    }
drawCard(playedCards)
}

game.onUpdateInterval(50, function() {
    let x=playedCards.length-1
    discardPile.sayText(playedCards[x])
})
function playCard(currentPlayer:UNOCard[]){
    let x=game.askForNumber("Which Card? 0=1st card and count up")
    if(isPlayValid(currentPlayer[x])){
    playedCards.push(currentPlayer[x])
    currentPlayer[x] = deckOfCards.pop()
    }
    if(lastPlayedCard.getColor()=="W"){declareWildCard(lastPlayedCard)}
}
function declareWildCard(myCard:UNOCard){
    let newColor = game.askForString("Choose a new color:R,B,Y,G")
    while (newColor != "R" && newColor != "G" && newColor != "Y" && newColor != "Y") {
        newColor = game.askForString("Choose a new color:R,B,Y,G")
    }
    myCard.setColor(newColor)
}
function getMoreCards() {
    while (playedCards.length > 1) {
        deckOfCards.push(playedCards.removeAt(0))
    }
    shuffle(deckOfCards)
}
while (deckOfCards.length = 0) {
    getMoreCards()
}
function isPlayValid(playedCard: UNOCard) {
        return(playedCard.getColor() == lastPlayedCard.getColor()
        || playedCard.getNumber() == lastPlayedCard.getNumber()
        || playedCard.getColor() == "W")
}
let whoseTurn=1
let forward = true
function playerTurn(){
    while(whoseTurn=1){
    playerImg.setImage(assets.image`Player1`)
    playerImg.sayText(arrayToString(player1Hand))
    pause(500)
    controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
        playCard(player1Hand)
        if (lastPlayedCard.getNumber() >= 0 && lastPlayedCard.getNumber() <= 9){
            if (forward){whoseTurn+1}else if(!forward){whoseTurn=numberOfPlayers}
        } else if (lastPlayedCard.getNumber()==10){
            if(numberOfPlayers=2){}else{
            if (forward) { whoseTurn + 2 } else if (!forward) { whoseTurn = numberOfPlayers-1 }}
        } else if (lastPlayedCard.getNumber()==11){
           if(numberOfPlayers=2){}else{
            if (forward) { 
                whoseTurn=numberOfPlayers
                forward=false
             } else if (!forward) { 
                 whoseTurn+1
                 forward=true
              }

           }
        } else if (lastPlayedCard.getNumber()==12){
            if (forward) { whoseTurn + 1 
                drawCard(player2Hand)
                drawCard(player2Hand) } 
                else if (!forward) { 
                    whoseTurn = numberOfPlayers
                if (numberOfPlayers = 2) { 
                    drawCard(player2Hand)
                    drawCard(player2Hand)
                }else if(numberOfPlayers=3){
                        drawCard(player3Hand)
                        drawCard(player3Hand)
                } else if (numberOfPlayers = 4) {
                    drawCard(player4Hand)
                    drawCard(player4Hand)
                } else if (numberOfPlayers = 5) {
                    drawCard(player5Hand)
                    drawCard(player5Hand)
                } else if (numberOfPlayers = 6) {
                    drawCard(player6Hand)
                    drawCard(player6Hand)
                } else if (numberOfPlayers = 7) {
                    drawCard(player7Hand)
                    drawCard(player7Hand)
                } else if (numberOfPlayers = 8) {
                    drawCard(player8Hand)
                    drawCard(player8Hand)
                } else if (numberOfPlayers = 9) {
                    drawCard(player9Hand)
                    drawCard(player9Hand)
                } else if (numberOfPlayers = 10) {
                    drawCard(player10Hand)
                    drawCard(player10Hand)
                }
            }
        } else if (lastPlayedCard.getNumber() == 13) { if (forward) { whoseTurn + 1 } else if (!forward) { whoseTurn = numberOfPlayers }
        } else if (lastPlayedCard.getNumber() == 14) {
            if (forward) {
                whoseTurn + 1
                drawCard(player2Hand)
                drawCard(player2Hand)
                drawCard(player2Hand)
                drawCard(player2Hand)
            }
            else if (!forward) {
                whoseTurn = numberOfPlayers
                if (numberOfPlayers = 2) {
                    drawCard(player2Hand)
                    drawCard(player2Hand)
                    drawCard(player2Hand)
                    drawCard(player2Hand)
                } else if (numberOfPlayers = 3) {
                    drawCard(player3Hand)
                    drawCard(player3Hand)                    
                    drawCard(player3Hand)
                    drawCard(player3Hand)
                } else if (numberOfPlayers = 4) {
                    drawCard(player4Hand)
                    drawCard(player4Hand)
                    drawCard(player4Hand)
                    drawCard(player4Hand)
                } else if (numberOfPlayers = 5) {
                    drawCard(player5Hand)
                    drawCard(player5Hand)
                    drawCard(player5Hand)
                    drawCard(player5Hand)
                } else if (numberOfPlayers = 6) {
                    drawCard(player6Hand)
                    drawCard(player6Hand)
                    drawCard(player6Hand)
                    drawCard(player6Hand)
                } else if (numberOfPlayers = 7) {
                    drawCard(player7Hand)
                    drawCard(player7Hand)
                    drawCard(player7Hand)
                    drawCard(player7Hand)
                } else if (numberOfPlayers = 8) {
                    drawCard(player8Hand)
                    drawCard(player8Hand)
                    drawCard(player8Hand)
                    drawCard(player8Hand)
                } else if (numberOfPlayers = 9) {
                    drawCard(player9Hand)
                    drawCard(player9Hand)
                    drawCard(player9Hand)
                    drawCard(player9Hand)
                } else if (numberOfPlayers = 10) {
                    drawCard(player10Hand)
                    drawCard(player10Hand)
                    drawCard(player10Hand)
                    drawCard(player10Hand)
                }
            }
        }
    })
    
    }
    while (whoseTurn = 2) {
        playerImg.setImage(assets.image`Player2`)
        playerImg.sayText(arrayToString(player2Hand))
        pause(500)
        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            playCard(player2Hand)
            if (lastPlayedCard.getNumber() >= 0 && lastPlayedCard.getNumber() <= 9) {
                if (numberOfPlayers==2){whoseTurn=1}else{
                if (forward) { whoseTurn + 1 } else if (!forward) { whoseTurn-1 }}
            } else if (lastPlayedCard.getNumber() == 10) {
                if (numberOfPlayers = 2) { } else {
                    if (forward) { whoseTurn + 2 } else if (!forward) { whoseTurn = numberOfPlayers}
                }
            } else if (lastPlayedCard.getNumber() == 11) {
                if (numberOfPlayers = 2) { } else {
                    if (forward) {
                        forward = false
                        whoseTurn - 1
                    } else if (!forward) {
                        forward = true
                        whoseTurn + 1
                    }

                }
            } else if (lastPlayedCard.getNumber() == 12) {
               if (numberOfPlayers==2){
                   whoseTurn=1
                   drawCard(player1Hand)
                   drawCard(player1Hand)
               }else if (forward) {
                    whoseTurn + 1
                    drawCard(player3Hand)
                    drawCard(player3Hand)
                }
                else if (!forward) {
                    whoseTurn-1
                    drawCard(player1Hand)
                    drawCard(player1Hand)
                    
                }
            } else if (lastPlayedCard.getNumber() == 13) {
                if (forward) { whoseTurn + 1 } else if (!forward) { whoseTurn-1 }
            } else if (lastPlayedCard.getNumber() == 14) {
                if (numberOfPlayers = 2) {
                    whoseTurn=1
                    drawCard(player1Hand)
                    drawCard(player1Hand)
                    drawCard(player1Hand)
                    drawCard(player1Hand)
                }
                if (forward) {
                    whoseTurn + 1
                    drawCard(player3Hand)
                    drawCard(player3Hand)
                    drawCard(player3Hand)
                    drawCard(player3Hand)
                }
                else if (!forward) {
                    whoseTurn-1
                        drawCard(player1Hand)
                        drawCard(player1Hand)
                        drawCard(player1Hand)
                        drawCard(player1Hand)
                    } 
                }
    
        })

    }

shuffle(deckOfCards)
firstDeal()
playerTurn()


}