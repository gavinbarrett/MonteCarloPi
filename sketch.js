let total_cnt = 0.0;
let hit_cnt = 0.0;

class Drop {
	
	constructor() {
		this.r = 4;
		this.x = random(width);
		this.y = random(height);
		this.color = '#ffa500';
	}

	display() {
		fill(this.color);
		ellipse(this.x, this.y, this.r, this.r);
	}

}

function setup() {
	createCanvas(800, 800);
	ellipse(400, 400, 800, 800);
}

function approx_pi(total, hit) {
	let h = parseFloat(hit);
	let t = parseFloat(total);
	return (4.0 * (h/t));
}

function draw() {
	fill(0);
	let drop = new Drop();
	drop.display();
	total_cnt += 1;
	let txt = document.getElementById('txt');
	if (dist(drop.x, drop.y, 400, 400) < 400) {
		hit_cnt += 1;
		let pi = approx_pi(total_cnt, hit_cnt);
		console.log(pi);
		txt.textContent = pi;
	}
	
}
