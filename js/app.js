/*-------------------------------- Constants --------------------------------*/
// -correct card matches (6)
const cards = ["c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11"]
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

function handleClick(evt){
  console.log(evt.target)
}



// card to flip and show the 






// boardCards.addEventListener("click", function(evt) {
//   console.log(evt)
// })



// let deck1El = document.querySelectorAll(".card");

// deck1El.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     debugger;
//     if (allowFlip) {
//       processClick(event);
//     }
//   });
// });

// // Replay button 
// replay.addEventListener('click', init)



// Winner message/Game is over



// matching cards message



// /*-------------------------------- Functions --------------------------------*/


// -Init 
function init () {
  cards = ["c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11"]
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


// // -Handle click

// function handleClick(evt) {
// // let 

// }
// // -Matching Cards
// function matchCards ()
//  if ("c1" === "c2") {

//  }



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
// need 2nd array for cards that have been matched 
// all event listeners and functions for event listeners
// figure out how to put image on front of card (right now just has back image)
    // set a target hidden class with the image set as a class in the HTML????? 
// 
