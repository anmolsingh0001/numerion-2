// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened

const button = document.getElementById("play-button");

button.onclick= going;

function going (){
    window.location.href="./game.html";
}
