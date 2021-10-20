/*-------------------------------- Constants --------------------------------*/

let cards = []
let playBoard = []



/*---------------------------- Variables (state) ----------------------------*/

let winner
let firstPick 




/*------------------------ Cached Element References ------------------------*/



let cardEls = document.querySelectorAll('.card')
let message = document.getElementById("message") 
let replayButtton = document.getElementById("replay")
let peekButton = document.getElementById("view-board")



/*----------------------------- Event Listeners -----------------------------*/


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


// invoking the init function 
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
        card1 = cards[evt.target.id].name
               firstPick = false
      } else  {
        // if 2nd card picked to picked THEN check if card 1 and card 2 are matches
        firstPick= true 
        cards[evt.target.id].status = "picked"
        card2 = cards[evt.target.id].name
        console.log(cards[evt.target.id])
        checkForMatch(card1, card2)
      }
      render()
    }

    // -Matching Cards

    function checkForMatch (card1, card2){
      console.log(card1, card2)
      // if card 1 === card 2 then match message, third status property that = matched. 
      // loop cards.forEach and if the status is picked change to matched. 
      // else card 1 doesnt = 2 then change back to hidden 
       // loop with cards.forEach and if the status is picked change to hidden.  
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
// Repeat that until all cards have been hidden
// Message “all cards have been hidden” (Maybe audio?)
// Replay button
// Return board to init state






// 1a.  Inside your checkForMatch function, you'll have two conditions:  Either the cards match, or they don't.  Write an if--else statement to handle each of these cases.

// 1b.  If the cards match (the 'if' part of the above statement), you'll need to use a forEach loop on the cards array and iterate over each card object.  If the card has a status of 'picked', it should be set to 'matched'.

// 1c.  If the cards to NOT match (the 'else' part of the above statement), you'll need to use a forEach loop on the cards array and iterate over each card object.  If the card has a status of 'picked', it should be set to 'hidden'.

// 1d.  After writing this code, you'll notice that when you flip the second card, you can't see it because it's flipping back to 'hidden' faster than the blink of an eye.  You need to wrap the inner part of the forEach loop inside of a setTimeout method and give it a delay, so the user is able to see the second card before they both flip back to 'hidden'.  Here's a hint on how to do that:

setTimeout(()=> {
  // this is where the code goes that you want to execute
}, 1000) //<-- this number is the delay in milliseconds that you are waiting before running the code within this method.

// 2a.  Your game should now function properly, storing matches face-up correctly on the screen and flipping non-matches back over.  The next part of the coding process is to determine when the game is over.  A simple way to do this is by counting the matches as the user makes them.  Add a variable named 'matches' to your list of declarations at the top of your code and initialize it to 0 inside your init function.  Every time the user matches two cards, you'll need to increment it by 1.  Write the code to make this happen in the correct place.  (Where you're comparing the cards to check for a match.)  Console.log(matches) to verify that it is properly increasing by 1 every time you select a matching set of cards.

// 2b.  After 6 matches have been found, your 'winner' variable should be set to true.  You should do this in the same place you wrote the code for 2a.  Test it out by console.log(winner) in your render function.  When you win the game, you should see `true` appear in the console.

// 3a.  In order to display messages to the user when they make a match, you'll need to KNOW whether they successfully picked a matching card on their second click.  You have access to whether the user is picking their first or second card already within the 'firstPicked' variable you set up last night.  Since you don't have access to whether or not the user just made a match anywhere in the game's logic, you'll need to add a variable to track it.  Create a variable named 'justMatched' and initialize it to null.  (I'll explain why we're using null in a minute...)  

// 3b.  The last piece of the MVP puzzle you have is to display messages to the user as they play the game.  This should happen in your render function, below the forEach that you've already got written.  There are 5 different messages that I could think of having to display to a user as they play the game.  For each of these, stub up if...else if... statements before adding any conditionals.  For now, use the inside of the statements to change the innerText property of your message element to each of the messages detailed below.


  // 1.  The user has found all the matches (winner === true)
    // - Display a message congratulating the user on winning the game.
  
  // 2.  The edge case - just stub this up as an else...if and you'll see why you need it in the next step.
    
  // 3.  The user found a match on their second click
    // - Display a message congratulating the user on their match and telling them how many remaining matches there are
    
  // 4.  The user did not successfully match the second card to the first card
    // - Display a message telling the user to try again.

  // 5.  The user is about to pick their first of two cards 
    // - Display a message along the lines of 'Find the match!'
    

// 3b.  Once you have the control flow stubbed up, you can start adding conditionals that will trigger each of the messages.  Think about what conditions need to be met in order for each of the above messages to be displayed!

  // 1.  If the user has found all the matches, winner will be true.  This is a gimme! 

  // 2.  This edge case is for the FIRST time through the render function.  Because we're going to use justMatched as either true or false for subsequent turns to display messages, this condition should check for justMatched being null.  Inside the else-if statement, all you need to do is return.  This condition will only happen the FIRST time through this render function, as we're going to set justMatched to either true or false elsewhere in the code.

  // 3.  This condition checks for whether the user makes a match on their second pick.  Find the code where that is happening and set justMatched to true.  Now, you can check for justMatched being true in this condition and congratulate them on their match.  Make sure you also flip justMatched back to false inside of this statement or you'll end up with a problem!

  // 4.  This condition checks if the user did NOT successfully make a match on their second pick.  Find the code where this is happening and set justMatched to false.  Now, you can use this condition to check whether justMatched is false and display a message telling the user to try again!

  // 5.  This condition should just be an else statement (no if necessary).  If NONE of the 4 conditions above are met, that MUST mean that the user is about to pick their first card, so you can display a message like 'Find the match!'

// 4a.  Peeking at cards is actually pretty simple compared to some of the other stuff you've done in this app.  Start by making sure you have a cached element reference for your peekButton and that it is properly configured with an event listener.  Use a console.log to test it out!

// 4b.  When this button is clicked, call a function named peekAtCards.  Define this function and stub it up.  This function should accomplish the following:
  
  // - Using a forEach loop, iterate over the cards array.  If the card being iterated over has a status of 'hidden' change it to 'peeking'.

  // - Call render()
  
  // - Configure a setTimeout function using the syntax shown in the example above to change the status of the cards BACK to 'hidden' using another forEach loop after a short delay.  (maybe 200 milliseconds?)