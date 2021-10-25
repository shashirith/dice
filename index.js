var ran = Math.floor(Math.random()*6)+1; //1-6

var dice= "dice"+ ran + ".png"; //dice1png-6png

var imgran= "images/" + dice;

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src",imgran);

var ran2 =Math.floor(Math.random()*6)+1;

var dice2= "dice"+ ran2+".png";

var imgran2= "images/"+ dice2;

var final=document.querySelectorAll("img")[1];

final.setAttribute("src",imgran2);

if(ran > ran2){
	document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(ran < ran2){
	document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
	document.querySelector("h1").innerHTML="Draw";
}