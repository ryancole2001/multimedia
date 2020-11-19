var bgcolor;
var button;
var audio;
var slider;
let x = 300;
let y = 300;
let xspd = 10;
let yspd = 7;
let r = 25;
function setup(){
	canvas = createCanvas(600, 600);
	bgcolor = color(200);
	button = createButton("Change background colour");
	button.mouseClicked(colorChange);
	slider = createSlider(5, 200, 20);
}
function playAudio(){
	new Audio("brighton.mp3").play();
}

function colorChange(){
	bgcolor = color(random(100));
}


function draw() {
  background(bgcolor);
  fill("blue");
  ellipse(x, y, slider.value(), slider.value());
  x += xspd;
  y += yspd;
  if (x > width - r || x < r) {
    xspd = -xspd;
  }
  if (y > height - r || y < r) {
    yspd = -yspd;
  }
}