var giraffe, fruits, kitchen, panda, sports, tiger;
var detector;
var rand;

function preload() {
  giraffe = loadImage('giraffe.jpg');
  fruits = loadImage('fruits.jpg');
  kitchen = loadImage('kitchen.jpg');
  panda = loadImage('panda.jpg');
  sports = loadImage('sports.jpg');
  tiger = loadImage('tiger.jpg');
  detector = ml5.objectDetector('cocossd');
}

function gotDetections(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results);  
  for (var i = 0; i < results.length; i++) {
    var object = results[i];
    stroke(0,255,0);
    strokeWeight(4);
    noFill();
    rect(object.x, object.y, object.width, object.height);
    noStroke();
    fill(255);
    textSize(24);
    text(object.label, object.x + 10, object.y+24);
    text(object.confidence,object.x + 10,object.y + 50);
  }
  
  
}


function setup() {
  createCanvas(1000, 1000);
  // console.log(detector);
  rand = Math.round(random(1,6));

  switch(rand){
      case 1: 
        image(giraffe,0,0);
        detector.detect(giraffe, gotDetections);
        break;

      case 2: 
        image(fruits,0,0); 
        detector.detect(fruits, gotDetections); 
        break;

      case 3:
          image(kitchen,0,0);
          detector.detect(kitchen, gotDetections);
          break;
          
      case 4:
          image(panda,0,0);
          detector.detect(panda, gotDetections);
          break;
          
      case 5: 
          image(sports,0,0);
          detector.detect(sports, gotDetections);
          break;    

      case 6:
          image(tiger,0,0);
          detector.detect(tiger, gotDetections);
          break;    
  }
  
}