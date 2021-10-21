/*-------------------------------- Constants --------------------------------*/
let cards = []
let playBoard = []

/*---------------------------- Variables (state) ----------------------------*/
let winner
let firstPick
let card1
let card2
let matches


/*------------------------ Cached Element References ------------------------*/
let cardEls = document.querySelectorAll(".card")
let message = document.getElementById("message")
let replayButtton = document.getElementById("replay")
let peekButton = document.getElementById("view-board")

/*----------------------------- Event Listeners -----------------------------*/
cardEls.forEach((card) => {
  card.addEventListener('click', handleClick)
})

replay.addEventListener('click', init)

// /*-------------------------------- Functions --------------------------------*/

function init() {
  let newDeck = [
    { name: "hp1", status: "hidden" },
    { name: "hp1", status: "hidden" },
    { name: "hp2", status: "hidden" },
    { name: "hp2", status: "hidden" },
    { name: "hp3", status: "hidden" },
    { name: "hp3", status: "hidden" },
    { name: "hp4", status: "hidden" },
    { name: "hp4", status: "hidden" },
    { name: "hp5", status: "hidden" },
    { name: "hp5", status: "hidden" },
    { name: "hp6", status: "hidden" },
    { name: "hp6", status: "hidden" },
  ]
  cards = shuffle(newDeck)
  winner = false
  firstPick = true
  matches = 0
  render()
}


init()



function render() {
  cardEls.forEach((card, idx) => {
    if (cards[idx].status === "hidden") {
      card.className = "card large shadow back"
    }
    else {
      card.className = `${cards[idx].name} card large shadow`
    }
    if (winner === true) {
      let winner = document.getElementById("message")
      winner.innerHTML = "You won, all cards matched!"
      setTimeout(function () {
        winner.innerHTML = ""
      }, 8000)
    }
  })
}



function shuffle(cardsToShuffle) {
  let shuffledCards = [];
  let shuffleHolder;
  for (i = 1; i = cardsToShuffle.length; i++) {
    randIdx = Math.floor(Math.random() * cardsToShuffle.length);
    shuffleHolder = cardsToShuffle.splice(randIdx, 1);
    shuffledCards.push(shuffleHolder[0]);
  }
  return shuffledCards;
}



function handleClick(evt) {
  if (firstPick === true) {
    cards[evt.target.id].status = "picked"
    card1 = cards[evt.target.id]
    firstPick = false
  } else {
    firstPick = true
    cards[evt.target.id].status = "picked"
    card2 = cards[evt.target.id]
    checkForMatch(card1, card2)
  }
  render()
}

    

function checkForMatch(card1, card2) {
  if (card1.name === card2.name) {
      matches++
  if (matches === 6) {
      winner = true
    }
  cards.forEach((card) => {
    if (card.status === "picked") {
      card.status = "matched"
    }
  })
  } 
  else {
    cards.forEach((card) => {
  if (card.status === "picked") {
      setTimeout(() => {
        card.status = "hidden"
        render()
      }, 1000)
  }
    })

  }
}




