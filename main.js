function preload(){
}

function setup(){
canvas = createCanvas(700,500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}

function draw(){
  image(video , 0 , 0, 700 , 500);

  fill(230, 245, 66)
  rect(595,70,60,350);
 
  fill(245, 66, 66);
  rect(100,40,500,60);

  fill(132, 29, 161);
  rect(69,70,60,350);

  fill(21, 84, 230);
  rect(100,400,500,60);
 
  fill(227, 95, 18);
  stroke(0,128,0);
  circle(625, 70, 90);

  fill(21, 230, 52); 
  stroke(0,128,0);
  circle(625,430,90);

  fill(255, 0, 242);
  stroke(0,128,0);
  circle(100, 70, 90);

  fill(86, 29, 161 ); 
  stroke(0,128,0);
  circle(100,430,90);

 
}

function take_snapshot(){
 save('student_name.png');   
}