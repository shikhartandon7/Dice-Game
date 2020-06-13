var randomNumber1=Math.ceil(Math.random()*6);
var randomDiceImage="images/"+"dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randomDiceImage);
var randomNumber2=Math.ceil(Math.random()*6);
var randomDiceImage2="images/"+"dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML=("😎Player 1 Wins!");
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML=("Player 2 Wins!😎");
}
else if(randomNumber1=randomNumber2){
  document.querySelector("h1").innerHTML=("😎It's a draw😎");
}
