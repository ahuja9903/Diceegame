var randomnumber1 = Math.floor(Math.random()*6)+1;
var sourcechange = "images/dice"+randomnumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",sourcechange);

var randomnumber2 = Math.floor(Math.random()*6)+1;
var sourcechange2 = "images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",sourcechange2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML= "🚩Player1 wins"
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML= "Player2 wins🚩"
}
else{
    document.querySelector("h1").innerHTML="🤙Match draw🤙"
}