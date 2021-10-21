☐ **<Your game’s title>**: A description of your game. Background info about why you chose the game is a nice touch.

☐ **Getting Started**: Include a link to your deployed game and any instructions you deem important.

☐ **Screenshot(s):** Images of your actual game. 2

☐ **Technologies Used**: List of the technologies used, for example: JavaScript, HTML, CSS, etc.

☐ **Next Steps**: Planned future enhancements (icebox items).




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