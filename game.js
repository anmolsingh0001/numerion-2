// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

// Iteration 3: Creating variables required to make the game functional

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional

// Iteration 7: Making Timer functional

let number1 = Math.floor(Math.random()*100)
const number1box = document.getElementById('number1');
number1box.innerHTML = number1;

let number2 = Math.floor(Math.random()*100)
const number2box = document.getElementById('number2');
number2box.innerHTML = number2;
// Iteration 3: Make the options button functional

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('mul');
const divide = document.getElementById('divide')
const modulus = document.getElementById('modulus')
const scorebox = document.getElementById('scoreboard')
var score = 0;
operater = Math.floor(Math.random()*5);
switch(operater){
    case 0: number3=number1+number2;break;
    case 1: number3=number1-number2;break;
    case 2: number3=number1%number2;break;
    case 3: number3=number1/number2;break;
    case 4: number3=number1*number2;break;
}
const abc = document.getElementById('number3');
abc.innerHTML = number3.toFixed(1);


plus.onclick = () => {
    if(number1 + number2==number3){
        score++;
        scorebox.innerHTML= "Score: "+score;
        resetTimer(timerId);
    }
    else{
        location.href='./gameover.html';
    }
    number1 = Math.floor(Math.random()*100);
    number1box.innerHTML = number1;
    number2 = Math.floor(Math.random()*100);
    number2box.innerHTML = number2;

    operater = Math.floor(Math.random()*5);
switch(operater){
    case 0: number3=number1+number2;break;
    case 1: number3=number1-number2;break;
    case 2: number3=number1%number2;break;
    case 3: number3=number1/number2;break;
    case 4: number3=number1*number2;break;
}
const abc = document.getElementById('number3');
abc.innerHTML = number3.toFixed(1); 
};

minus.onclick = () => {
    if(number1 - number2==number3){
        score++;
        scorebox.innerHTML= "Score: "+score;;
        resetTimer(timerId);
    }
    else{
        location.href='./gameover.html';
    }
    number1 = Math.floor(Math.random()*100);
    number1box.innerHTML = number1;
    number2 = Math.floor(Math.random()*100);
    number2box.innerHTML = number2;

    operater = Math.floor(Math.random()*5);
switch(operater){
    case 0: number3=number1+number2;break;
    case 1: number3=number1-number2;break;
    case 2: number3=number1%number2;break;
    case 3: number3=number1/number2;break;
    case 4: number3=number1*number2;break;
}
const abc = document.getElementById('number3');
abc.innerHTML = number3.toFixed(1);
};

modulus.onclick = () => {
    if(number1 % number2==number3){
        score++;
        scorebox.innerHTML= "Score: "+score;;
        resetTimer(timerId);
    }
    else{
        location.href='./gameover.html';
    }
    number1 = Math.floor(Math.random()*100);
    number1box.innerHTML = number1;
    number2 = Math.floor(Math.random()*100);
    number2box.innerHTML = number2;

    operater = Math.floor(Math.random()*5);
switch(operater){
    case 0: number3=number1+number2;break;
    case 1: number3=number1-number2;break;
    case 2: number3=number1%number2;break;
    case 3: number3=number1/number2;break;
    case 4: number3=number1*number2;break;
}
const abc = document.getElementById('number3');
abc.innerHTML = number3.toFixed(1); 
};

divide.onclick = () => {
    if(number1 / number2==number3){
        score++;
        scorebox.innerHTML= "Score: "+score;;
        resetTimer(timerId);
    }
    else{
        location.href='./gameover.html';
    }
    number1 = Math.floor(Math.random()*100);
    number1box.innerHTML = number1;
    number2 = Math.floor(Math.random()*100);
    number2box.innerHTML = number2;

    operater = Math.floor(Math.random()*5);
switch(operater){
    case 0: number3=number1+number2;break;
    case 1: number3=number1-number2;break;
    case 2: number3=number1%number2;break;
    case 3: number3=number1/number2;break;
    case 4: number3=number1*number2;break;
}
const abc = document.getElementById('number3');
abc.innerHTML = number3.toFixed(1); 
};

multiply.onclick = () => {
    if(number1 * number2==number3){
        score++;
        scorebox.innerHTML="Score: "+score;
        resetTimer(timerId);
    }
    else{
        location.href='./gameover.html';
    }
    number1 = Math.floor(Math.random()*100);
    number1box.innerHTML = number1;
    number2 = Math.floor(Math.random()*100);
    number2box.innerHTML = number2;

    operater = Math.floor(Math.random()*5);
switch(operater){
    case 0: number3=number1+number2;break;
    case 1: number3=number1-number2;break;
    case 2: number3=number1%number2;break;
    case 3: number3=number1/number2;break;
    case 4: number3=number1*number2;break;
}
const abc = document.getElementById('number3');
abc.innerHTML = number3.toFixed(1); 
};

// Iteration 4: Build a timer for the game

var time = 20;
var timer = document.getElementById('timer');
var timerId;

function startTimer(){
    time = 20;
    timer.innerHTML = time;

    timerId = setInterval(() => {
        time--;
        if(time == 0){
            location.href='./gameover.html';
        }
        timer.innerHTML = time;
    },1000);
    localStorage.setItem("score",score)
}


function resetTimer(intervalId){

    clearInterval(intervalId);
    startTimer();
}

startTimer();