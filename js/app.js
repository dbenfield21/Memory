/*-------------------------------- Constants --------------------------------*/
// -correct card matches (6)
let cards = []
let playBoard = []



// if you're going to compare cards for a memory game, it might help to have 6 pairs of matching values in your cards array so you can compare them in a checkMatch(card1, card2) function or something similar. Need to add 6 pairs of matching values to array, HOW??

/*---------------------------- Variables (state) ----------------------------*/
// -cards 12 () different images 

let winner
let firstPick 




/*------------------------ Cached Element References ------------------------*/



// card click show image, do something 
let cardEls = document.querySelectorAll('.card')
let message = document.getElementById("message") 
let replayButtton = document.getElementById("replay")
let peekButton = document.getElementById("view-board")



/*----------------------------- Event Listeners -----------------------------*/
// card click - Use a for loop to add an event listener to all the cards


cardEls.forEach(card => {
  card.addEventListener('click', handleClick)
})






// Replay button 
replay.addEventListener('click', init)







// /*-------------------------------- Functions --------------------------------*/


// -Init 

function init() {
  let newDeck = [
    {name:"hp1", status: 'hidden'}, {name:"hp1", status: 'hidden'}, {name:"hp2", status: 'hidden'}, {name:"hp2", status: 'hidden'}, {name:"hp3", status: 'hidden'}, {name:"hp3", status: 'hidden'}, {name:"hp4", status: 'hidden'}, {name:"hp4", status: 'hidden'}, {name:"hp5", status: 'hidden'}, {name:"hp5", status: 'hidden'}, {name:"hp6", status: 'hidden'}, {name:"hp6", status: 'hidden'}]
  // shuffle the deck
  cards = shuffle(newDeck)
  // DO I NEED TO PUT SHUFFLED CARDS EMPTY ARRAY IN HERE
  winner = false
  firstPick = true
  render()
  console.log(cards)
}

init()

//  -Render

function render () {
  // loop over all of the card elements and render them based on the status property of the object located within the matching index of the cards array
  cardEls.forEach((card, idx) => {
    if (cards[idx].status === "hidden"){
      card.className = "card xlarge shadow back"
    }
    else {
      card.className = `${cards[idx].name} card xlarge shadow`
    }
  })
}
  
    
//shuffle 
    
  function shuffle(cardsToShuffle) {
    let shuffledCards = [];
    let shuffleHolder;
    for (i=1; i=cardsToShuffle.length; i++){
      randIdx=Math.floor(Math.random()*cardsToShuffle.length);
      shuffleHolder = cardsToShuffle.splice(randIdx, 1);
      shuffledCards.push(shuffleHolder[0]);
    }
    return shuffledCards;
    }
  
    
// handle click 
    
    function handleClick(evt){
      if (firstPick === true) {
        // if this is the first card clicked then change status to picked.
        cards[evt.target.id].status = "picked"
        
        firstPick = false
      } else  {
        // if 2nd card picked to picked THEN check if card 1 and card 2 are matches
        firstPick= true 
        cards[evt.target.id].status = "picked"
        console.log(cards[evt.target.id])
      }
      render()
    }


      
    

   

      


// -Matching Cards

 



// Step by Step

// Start Game. Run init, basic board set up. 
// Play button-Event listener 
// Cards need to be active to click 
// Match image hidden, all  cards showing same image or color.  
// Click 1st card
// Show image, card remains on the screen/don’t go back to the original color. 
// Click 2nd card
// Show image, remains on the screen/don’t go back to the original color. 
// Determine if card 1 and card 2 are matching
// If they are matching then “Matching message” (Maybe audio?)
// Cards stay on the board (or disappear if possible) (ANIMATE?)
// If they are NOT matching, return to original color/image.
// Repeat that until all cards have been hidden
// Message “all cards have been hidden” (Maybe audio?)
// Replay button
// Return board to init state


// TO DO
// write functions
// //need 2nd array for cards that have been hidden 
// all event listeners and functions for event listeners
// figure out how to put image on front of card (right now just has back image)
    // set a target hidden class with the image set as a class in the HTML????? 
// 


// //Rename pics
// //shuffle function SORT OF DONE< NEED TO TEST AND EDIT
// handle click function to display image of card when clicked. Based on position in cards array. 

// function tell it to hide the back image. (remove back class, adds class of image that wants to be added) part of handle click function. 1. check if card has already been clicked. Remove class name thats giving






