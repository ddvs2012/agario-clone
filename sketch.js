//draws objects

var blob;	//player
var blobs = []; //container for blobs to eat
var zoom = 1;

function setup() {
  createCanvas(800, 800);	//create background
  blob = new Blob(0, 0, 64);
  for (var i = 0; i < 1000; i++){	//create blobs to eat
  	var x =random(-width, width)
  	var y =random(-height, height)
  	blobs[i] = new Blob(x, y, 16);
  } 

}

function draw() {
  background(0);

  translate(width/2, height/2);	// handles zoom distance
  var newzoom = 64 / blob.r;  
  zoom = lerp(zoom, newzoom, 0.1);
  scale(zoom);
  translate(-blob.pos.x, -blob.pos.y);

  for (var i = blobs.length - 1; i >= 0; i--) {
  	blobs[i].show(0, 1);
  	if (blob.eats(blobs[i])) {
  		blobs.splice(i, 1);
  	} 
  }
  blob.show();
  blob.update();
  for (var i = 0; i < blobs.length; i++){	//shows blobs created in setup
  	blobs[i].show();
  }

}