var gameArray = ["a","b","c","d","e","f","g","h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 
var lives  = 10
var wins   = 0
var losses = 0
var picked = []


var gameLetter = gameArray[Math.floor(Math.random()*gameArray.length)].toUpperCase();
gameArray.pop();
  console.log(gameLetter)

 function reset() {
  lives      = 10;
  picked     = [];
  gameLetter = gameArray[Math.floor(Math.random()*gameArray.length)].toUpperCase();
  console.log(gameLetter)
}     
    
    
 
 

 
 document.onkeyup = function(event) {

       var userGuess = event.key.toUpperCase()
        //if(gameArray.indexOf(userGuess.toString()) > -1).toUpperCase{
       
        

      document.getElementById("userGuesshtml").innerHTML    = userGuess;

      document.getElementById("winshtml").innerHTML         = wins;
        
      document.getElementById("losseshtml").innerHTML       = losses;

      document.getElementById("liveshtml").innerHTML        = lives;



    function prepend(userGuess) {

      document.getElementById("userGuesshtml").innerHTML = picked.join(", ");
    
    }







		if (userGuess === gameLetter) {
          wins++;
          alert("Yes, the letter was " + gameLetter.toUpperCase() + " you're psychic!");
          reset();
        }else {
        	lives--;
        	console.log(lives);
        	picked.push(userGuess);
        	prepend(userGuess);
        }
        

 if (lives < 1) {
          losses++;
          reset();
          alert("You lost! Game over try again!");
        }

//}
 }


      

				
			
		


