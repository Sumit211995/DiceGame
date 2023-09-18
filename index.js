// For Left Dice
var randomnumber1 = Math.floor(Math.random()*6 +1);

var randomDiceImg = "dice" + randomnumber1 + ".png";
var randomImgSrc = "images/" + randomDiceImg;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImgSrc);

//For Right Dice
var randomNumber2 = Math.floor(Math.random()*6 +1);
var randomImgSrc2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);

//Changing HTML Text or Status
if(randomnumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Won!";
}else if(randomnumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 2 Won!";
}else{
    document.querySelector("h1").innerHTML = "Match Draw 😊";
}

