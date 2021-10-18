/*-------------------------------- Constants --------------------------------*/
// -correct card matches (6)
const cards = ["c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11"]
let playBoard = []



/*---------------------------- Variables (state) ----------------------------*/
// -cards 12 () different images 

let winner =



/*------------------------ Cached Element References ------------------------*/


// card click show image, do something 
let cardX = document.querySelectorAll("cardxlargeshadow")
let message = document.getElementById("message") 
let replayButtton = document.getElementById("replay")
let peekButton = document.getElementById("view-board")



/*----------------------------- Event Listeners -----------------------------*/
// card click - Use a for loop to add an event listener to all the cards

cardX.forEach((cardX) => {
	cardX.addEventListener('click', handleClick) 
    console.log(cardX)
})


  

// let deck1El = document.querySelectorAll(".card");

// deck1El.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     debugger;
//     if (allowFlip) {
//       processClick(event);
//     }
//   });
// });

// Replay button 
replay.addEventListener('click', init)



Winner message/Game is over



matching cards message



/*-------------------------------- Functions --------------------------------*/


// -Init 
function init () {
  cards = ["c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11"]
  winner = false
  render()
}



// -Render

function render () {
playBoard.forEach(function(card) {
  if
  else if
  else 

}
}


// -Handle click

function handleClick(evt) {
// let 

}
// -Matching Cards
function matchCards ()
 if ("c1" === "c2") {

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
// need 2nd array for cards that have been matched 
// all event listeners and functions for event listeners
// figure out how to put image on front of card (right now just has back image)
// 

