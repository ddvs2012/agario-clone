//constructor(s) for blobs

function Blob(x, y, r) {
	this.pos = createVector(x, y);
	this.r = r;
	this.vel = createVector(0,0);

	this.update = function() { // updates the screen
		var newvel = createVector(mouseX-width/2, mouseY-height/2);  //point of interest
		newvel.setMag(3);	//acceleration?
		this.vel.lerp(newvel, 0.1); // smooths turning
		this.pos.add(this.vel);	//??
	}

	this.eats = function(other){	//handles growth/blob removal
		var d = p5.Vector.dist(this.pos, other.pos);	//?
		if (d < this.r + other.r*.5){
			var area = PI * this.r * this.r + PI * other.r * other.r;	//calculating new area
			this.r = sqrt(area / PI); //assigning new area to player
			return true;
		} else {
			return false;
		}
	}

	this.show = function(){
		fill(255);
		ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
	}
}