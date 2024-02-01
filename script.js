var random1 = Math.floor(Math.random()*6)+1;

document.querySelector(".img1").setAttribute("src", "images/dice"+random1+".png");
var random2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src", "images/dice"+random2+".png");

if(random1 === random2)
{
    document.querySelector('h1').innerHTML = "Draw!";
}
else if(random1 < random2)
{
    document.querySelector('h1').innerHTML = "Player2 wins 🎉";
}
else{
    document.querySelector('h1').innerHTML = "Player1 wins 🎉";
}