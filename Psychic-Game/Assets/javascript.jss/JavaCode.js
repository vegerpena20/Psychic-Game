
    // The array of questions for the game.
    var questions = [
        { q: "What letter am I thinking about a or b?", a: "a"},
        { q: "What letter am I thinking about f or t?", a: "f" },
        { q: "What letter am I thinking about y or u?", a: "u" },
        { q: "What letter am I thinking about i or p?", a: "p" },
        { q: "What letter am I thinking about w or o?", a: "w" },
        ];
    
        // Starting scores for game.
        var wins = 0;
        var loses = 0;
        var GuessesLeft = 5;
        var GuessesSoFar = 0;
    
        // Variable to hold the index of current question.
        var questionIndex = 0;
    
        // FUNCTIONS
        // ==============================================================================
    
        // Function to render questions.
        function renderQuestion() {
          // If there are still more questions, render the next one.
          if (questionIndex <= (questions.length - 1)) {
            document.querySelector("#question").innerHTML = questions[questionIndex].q;
          }
          // If there aren't, render the end game screen.
          else {
            document.querySelector("#question").innerHTML = "Game Over!";
            document.querySelector("#wins").innerHTML = "Final Score: " + score + " out of " + questions.length;
          }
        }
    
        // updates the win score
        function updateWins() {
          document.querySelector("#wins").innerHTML = "wins: " + wins;
        }
        //updates the loses score
        function updateLoses() {
          document.querySelector("#loses").innerHTML = "loses: " + loses;
        }
        //updates guesses left 
        function updateGuessesLeft() {
          document.querySelector("#GuessesLeft").innerHTML = "GuessesLeft: " + GuessesLeft;
        }
        //updates guesses so far
        function updateGuessesSoFar() {
          document.querySelector("#GuessesSoFar").innerHTML = "GuessesSoFar: " + GuessesSoFar;
        }
        //second section
    
        // Calling functions to start the game.
        renderQuestion();
        updateWins();
        updateLoses();
        updateGuessesLeft();
        updateGuessesSoFar();
    
        // When the user presses a key, it will run the following function...
        document.onkeyup = function(event) {
    
          // If there are no more questions, stop the function.
          if (questionIndex === questions.length) {
            return;
          }
    
          // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
          var userInput = event.key.toLowerCase();
    
          // Only run this code if "t" or "f" were pressed.
          if (userInput === "a", "u", "w", "f", "p") {
    
            // If they guess the correct answer, increase and update score, alert them they got it right.
            if (userInput === questions[questionIndex].a) {
              alert("Correct!");
              wins++;
              updateWins();   
    
            }
    
            // If wrong, alert them they are wrong.
            else {
              alert("Wrong!");
              loses--;        
              updateLoses();         
            }
            //updates guesses
            if (userInput === questions[questionIndex].a) {
              GuessesSoFar++;
              updateGuessesSoFar();
            }
            //updates guesses left
            else {
              GuessesLeft--;
              updateGuessesLeft();
            }
            
    
            // Increment the questionIndex variable and call the renderQuestion function.
            questionIndex++;
            renderQuestion();
    
          }
    
        };
    