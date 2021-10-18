// Constants
// -correct card matches (6)
let cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// Variables
// -cards 12 (or more if I do more cards) different images 
// -winner 
// -number of matches 

let cards
let winner



// Cached Element References & Event Listeners


// -Event Listeners: 

Winner message/Game is over, play button, matching cards message, Event Reset/Replay button, card clicked show image. 

//  Use a for loop to add an event listener to all the cards

// Functions 
// -Init 
// -Render
// -Handle click
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
// Cards stay on the board (or disappear if possible)
// If they are NOT matching, return to original color/image.
// Repeat that until all cards have been matched
// Tally board with the number of matches that have been made
// Message “all cards have been matched” (Maybe audio?)
// Replay button
// Return board to init state