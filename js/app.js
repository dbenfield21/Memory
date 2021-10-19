/*-------------------------------- Constants --------------------------------*/
// -correct card matches (6)
const cards = []
let playBoard = []



// if you're going to compare cards for a memory game, it might help to have 6 pairs of matching values in your cards array so you can compare them in a checkMatch(card1, card2) function or something similar. Need to add 6 pairs of matching values to array, HOW??

/*---------------------------- Variables (state) ----------------------------*/
// -cards 12 () different images 

let winner 



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
// replay.addEventListener('click', init)



// Winner message/Game is over FUNCTION
function Winner () {

}


// matching cards message



// /*-------------------------------- Functions --------------------------------*/


// -Init 

function init () {
  cards =["hp1", "hp1", "hp2", "hp2", "hp3", "hp3", "hp4", "hp4", "hp5", "hp5", "hp6", "hp6"]
  // DO I NEED TO PUT SHUFFLED CARDS EMPTY ARRAY IN HERE
  winner = false
  render()
}



// // -Render

// function render () {
  // playBoard.forEach(function(card) {
    //   if
    //   else if
    //   else 
    
    // }
    // }
    
    
//shuffle 
    
  function shuffle(cardsToShuffle) {
    let shuffledCards = [];
    let shuffleHolder;
    for (i=1; i=cardsToShuffle.length; i++){
      randIdx=Math.floor(Math.random()*cardsToShuffle.length);
      shuffleHolder = cardsToShuffle.splice(randIdx, 1);
      shuffledCards.push(`${shuffleHolder}`);
    }
    return shuffledCards;
    init()
  }
  
    
// handle click 
    
    function handleClick(evt){
      console.log(evt.target)
    //   for (i=0; i < cards.length; i++) {

    //   if (card === clicked)
    //   {
    //     cardEls[i].classList.remove("back")
    //     cardEls[i].classList.add("hp1") 
    //   }
    //   else {

    //   }
    // }
      }


      

    //  (cardEls[i] )
    //  if (cardEls[0].classList.remove("back") 
    //  {   
    // })

  
      


// -Matching Cards

  function matchCards () {
    if ("c1" === "c2") {

    }

  }





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
// Repeat that until all cards have been matched
// Message “all cards have been matched” (Maybe audio?)
// Replay button
// Return board to init state


// TO DO
// write functions
// //need 2nd array for cards that have been matched 
// all event listeners and functions for event listeners
// figure out how to put image on front of card (right now just has back image)
    // set a target hidden class with the image set as a class in the HTML????? 
// 


// //Rename pics
// //shuffle function SORT OF DONE< NEED TO TEST AND EDIT
// handle click function to display image of card when clicked. Based on position in cards array. 

// function tell it to hide the back image. (remove back class, adds class of image that wants to be added) part of handle click function. 1. check if card has already been clicked. Remove class name thats giving







// function shuffle (cards) {
//   for (let i = cards.length - 1; i>0; i++) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array [j], array [i]];  }
//     render()
//   }
