const divItems = document.getElementsByClassName("grid-item");

const Bnum = document.getElementsByClassName("numB");
const Inum = document.getElementsByClassName("numI");
const Nnum = document.getElementsByClassName("numN");
const Gnum = document.getElementsByClassName("numG");
const Onum = document.getElementsByClassName("numO");
var compArray = [0, 0, 0, 0, 0];
var temp = 0;
var node;
var num;
const circus = ['url(img/greenMix.png)', 'url(img/blueMix.png)', 'url(img/orangeMix.png)', 'url(img/blackMix.png)', 'url(img/purpleMix.png)'];
const fancy = ['url(img/yellowPic.png)', 'url(img/bluePic.png)', 'url(img/redPic.png)', 'url(img/purplePic.png)', 'url(img/greenPic.png)'];
const western = ['url(img/whiteBlock.png)', 'url(img/greenBlock.png)', 'url(img/blueBlock.png)', 'url(img/redBlock.png)'];
const simple = ['url(img/red.png)', 'url(img/green.png)', 'url(img/blue.png)', 'url(img/purple.png)', 'url(img/orange.png)'];
const images = circus.concat(fancy).concat(western).concat(simple);
const myNav = document.getElementById("myNav");
const rangeID = document.getElementById("range");
var range = 15;
var cards = images;
var color = "rgb(255, 0, 0, 0.5)";
const circle = document.getElementById("circle");


window.onload = setColor();

function setColor(){
  temp = Math.floor(Math.random()*cards.length);
  document.getElementById("gridContainer").style.backgroundImage = cards[temp];
  setUP(Bnum, 1, range)
  setUP(Inum, 1 + (range * 1), range);
  setUP(Nnum, (1 + (range * 2)), range);
  setUP(Gnum, (1 + (range * 3)), range);
  setUP(Onum, (1 + (range * 4)), range);
}

function rotate(item){
  item.style.transition = "transform 0.7s ease";
  item.style.transform = "rotate(360deg)";
  setColor(); 
  setTimeout(function () {
    item.style.transition = "";
    item.style.transform = "rotate(0deg)";
  }, 700);
}

function setUP(item, int, factor){
  for (var i = 0; i < item.length; i++){
    num = item[i];
    num.style.backgroundColor = "white";
    temp = Math.floor(Math.random()*factor) + int;
    while(compArray.includes(temp)){
      temp = Math.floor(Math.random()*factor) + int;
    }
    compArray[i] = temp;
    node = document.createTextNode(temp);
    num.innerHTML = temp;
  }
}

function openNav() {
  myNav.style.width = "100%";
  myNav.scrollTo(0, 0);
}

function myHover() {
  circle.style.width = "7vmin";
  circle.style.height = "7vmin";
}

function leaving(){
  circle.style.width = "4vmin";
  circle.style.height = "4vmin";
}

function selected(item) {
    if (item.style.backgroundColor === "white"){
      item.style.backgroundColor = color;
    }
    else {
      item.style.backgroundColor = "white";
    }
}

function free(item) {
    item.style.backgroundColor = color;
}

function save() {
  temp = rangeID.value;
  if (isNaN(temp) || temp < 5 || temp > 19) {
    rangeID.style.backgroundColor = "rgb(255, 0, 0, 0.5)";
  } else {
    rangeID.style.backgroundColor = "white";
    range = rangeID.value;
    cards = eval(document.querySelector('input[name=style]:checked').value);
    color = document.querySelector('input[name=color]:checked').value;
    circle.style.backgroundColor = color;
    myNav.style.width = "0%";
    setColor();
  }
}

jQuery(document).ready(function() {

  var mouseX = 0, mouseY = 0, pointerX = 0, pointerY = 0;
  var xp = 0, yp = 0, xy;
  
  $(document).mousemove(function(e){
    var xy = $("#circle").width() / 2;
    mouseX = e.pageX - xy;
    mouseY = e.pageY - xy; 
    pointerX = e.pageX - 7;
    pointerY = e.pageY - 7;
  });
    
  setInterval(function(){
    xp += ((mouseX - xp)/6);
    yp += ((mouseY - yp)/6);
    $("#smallcircle").css({left: pointerX +'px', top: pointerY +'px'});
    $("#circle").css({left: xp +'px', top: yp +'px'});
  }, 20);

});