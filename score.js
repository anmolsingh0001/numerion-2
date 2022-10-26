// Iteration 8: Making scoreboard functional


const board = document.getElementById('score-board');
board.innerHTML=localStorage.getItem('score');



const reset = document.getElementById('play-again-button');

reset.onclick=() => {
    window.location.href = "./game.html";
}

const live = document.getElementById('score/board');

