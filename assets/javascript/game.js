var randomNum = Math.floor((Math.random() * 120) + 19);
var score = 0;
var wins = 0;
var loss = 0;
var crystalNum1 = Math.floor((Math.random() * 12) + 1);
var crystalNum2 = Math.floor((Math.random() * 12) + 1);
var crystalNum3 = Math.floor((Math.random() * 12) + 1);
var crystalNum4 = Math.floor((Math.random() * 12) + 1);

var numToMatch = Math.floor((Math.random() * 100) + 1);
var gameStarted = false;
//document.getElementById("number").innerHTML = randomNum;

$("#button1").on("click", function() {
    gameStarted = true;
    if (gameStarted === true){
        document.getElementById("number").innerHTML = randomNum;
    }

   score += crystalNum1;

   document.getElementById("score").innerHTML = parseInt(score, 10);
   if(randomNum < score)
   {
       alert("You lose!");
       loss++;
       document.getElementById("Loss").innerHTML = "Losses: " + loss;
       reset();
   }
   if(randomNum === score)
   {
       alert("You Win!");
        wins++;
        document.getElementById("win").innerHTML = "Wins: " + wins;
       reset();
   }

});

$("#button2").on("click", function() {
    if (gameStarted === true){
        document.getElementById("number").innerHTML = randomNum;
    }
     score += crystalNum2;
   
   document.getElementById("score").innerHTML = parseInt(score, 10);
   if(randomNum < score)
   {
       alert("You lose!");
       loss++;
       document.getElementById("Loss").innerHTML = "Losses: " + loss;
       reset();
   }
   if(randomNum === score)
   {
       alert("You Win!");
        wins++;
        document.getElementById("win").innerHTML = "Wins: " + wins;
       reset();
   }
});

$("#button3").on("click", function() {
    if (gameStarted === true){
        document.getElementById("number").innerHTML = randomNum;
    }
    score += crystalNum3;
   
    document.getElementById("score").innerHTML = parseInt(score, 10);
    if(randomNum < score)
   {
       alert("You lose!");
       loss++;
       document.getElementById("Loss").innerHTML = "Losses: " + loss;
       reset();
   }
   if(randomNum === score)
   {
       alert("You Win!");
        wins++;
        document.getElementById("win").innerHTML = "Wins: " + wins;
       reset();
   }

});

$("#button4").on("click", function() {
    if (gameStarted === true){
        document.getElementById("number").innerHTML = randomNum;
    }
    score += crystalNum4;
   
    document.getElementById("score").innerHTML = parseInt(score, 10); 
    if(randomNum < score)
   {
       alert("You lose!");
       loss++;
       document.getElementById("Loss").innerHTML = "Losses: " + loss;
       reset();
   }
   if(randomNum === score)
   {
       alert("You Win!");
        wins++;
        document.getElementById("win").innerHTML = "Wins: " + wins;
       reset();
   }

});

function reset(){
    document.getElementById("number").innerHTML = "?";
    gameStarted === false;
    score = 0;
    document.getElementById("score").innerHTML = 0;
    randomNum = Math.floor((Math.random() * 120) + 19);
    crystalNum1 = Math.floor((Math.random() * 12) + 1);
    crystalNum2 = Math.floor((Math.random() * 12) + 1);
    crystalNum3 = Math.floor((Math.random() * 12) + 1);
    crystalNum4 = Math.floor((Math.random() * 12) + 1);
}