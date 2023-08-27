//JAVASCRIPT STUFF
// generate random number
var randy;

function resetGame()
{
  document.getElementById("play-again").className = "hide";
  document.getElementById("submit-guess").className = "show";
  document.getElementById("game-image").src = "img/plyagain.jpg";
  document.getElementById("game-image").innerText = "let us play";
  randy = Math.ceil(Math.random()*99);
}

// get input
function playGame()
{
  
  var guessnumber = document.getElementById("user-guess").value;  
  if (guessnumber > randy) changeimageDisplay("high", "you guess is too high Bro");
  else if (guessnumber < randy) changeimageDisplay("low", "you guess to low bro"); 
  else if (guessnumber == randy) changeimageDisplay("win", "you won big bro");
  else changeimageDisplay("error", "like seriouly bro that is not a number");
  
  document.getElementById("user-guess").select();
}



function changeimageDisplay(status, message)
{
   var image;
    
   switch(status) 
   {
     case "high":image ="img/frownface.jpg"; break;
     case "low": image ="img/forehead.jpg";  break;
     case "win":
     image ="img/120820873.jpg";
     document.getElementById("play-again").className = "show";
     document.getElementById("submit-guess").className = "hide";
     break;
     default: image ="img/120820873.jpg";
   }
    
  
   document.getElementById("game-message").innerText = message;
   document.getElementById("game-image").src = image;

}
