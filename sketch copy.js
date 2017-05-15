function setup() {
    createCanvas(400, 400);
}

function draw() {
  background(255, 0, 255);
  ellipse(200, 200, 50, 50);
  rect(300, 50, 50, 200);
  rect(50, 50, 50, 200);
  triangle(150, 300, 200, 250, 250, 300);
  arc(200, 50, 200, 80, 0, PI+QUARTER_PI, CHORD);
}