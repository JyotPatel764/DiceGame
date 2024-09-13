var refresh = prompt("Give the command 'OK' to start");
var result1 = 0;
var result2 = 0;

function diceGame(){
 firstDice();
 secondDice();
 if (result1 < result2){
    document.querySelector("h1").innerHTML = "Player 2 won,Player 1 sucks!";
}
else if (result1 > result2){
    document.querySelector("h1").innerHTML = "Player 1 won,player 2 sucks!";
}
else{
    document.querySelector("h1").innerHTML = "real winner is the owner of site";
}
}

function firstDice(){
    var random1 = Math.random();
    var floorValue = Math.floor((random1 * 6) + 1);
if (floorValue === 1){
    document.querySelector(".image1").setAttribute("src" , "./images/dice1.png");
    result1 += 1;
}
else if (floorValue === 2){
    document.querySelector(".image1").setAttribute("src" , "./images/dice2.png");
    result1 += 2;
}
else if (floorValue === 3){
    document.querySelector(".image1").setAttribute("src" , "./images/dice3.png");
    result1 += 3;
}
else if (floorValue === 4){
    document.querySelector(".image1").setAttribute("src" , "./images/dice4.png");
    result1 += 4;
}
else if (floorValue === 5){
    document.querySelector(".image1").setAttribute("src" , "./images/dice5.png");
    result1 += 5;
}
else{
    document.querySelector(".image1").setAttribute("src" , "./images/dice6.png");
    result1 += 6;
}
}


function secondDice(){
    var random2 = Math.random();
    var floorValue2 = Math.floor((random2 * 6) + 1);
if (floorValue2 === 1){
    document.querySelector(".image2").setAttribute("src" , "./images/dice1.png");
    result2 += 1;
}
else if (floorValue2 === 2){
    document.querySelector(".image2").setAttribute("src" , "./images/dice2.png");
    result2 += 2;
}
else if (floorValue2 === 3){
    document.querySelector(".image2").setAttribute("src" , "./images/dice3.png");
    result2 += 3;
}
else if (floorValue2 === 4){
    document.querySelector(".image2").setAttribute("src" , "./images/dice4.png");
    result2 += 4;
}
else if (floorValue2 === 5){
    document.querySelector(".image2").setAttribute("src" , "./images/dice5.png");
    result2 += 5;
}
else{
    document.querySelector(".image2").setAttribute("src" , "./images/dice6.png");
    result2 += 6;
}
}


    if (result1 < result2){
        document.querySelector("h1").innerHTML = "Player 2 won,Player 1 sucks!";
    }
    else if (result1 > result2){
        document.querySelector("h1").innerHTML = "Player 1 won,player 2 sucks!";
    }
    else{
        document.querySelector("h1").innerHTML = "real winner is the owner of site";
    }
diceGame();
