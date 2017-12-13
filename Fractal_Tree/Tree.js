var angle = 0;
var slider;

function setup(){
  createCanvas(500, 500);
  colorMode(HSB);
  slider = createSlider(0, TWO_PI, PI/8, 0.01);
}

function draw(){
  colorMode(RGB);
  background(51);
  angle = slider.value();
  stroke(255, 100, 150);
  translate(250 ,height);
  branch(120);
}

function branch(len){
  line(0, 0, 0, -len);
  translate(0 , -len);
  if(len > 4){
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len*0.67);
    pop();
  }
  //line(0, 0, 0, -len*0.67);
}
