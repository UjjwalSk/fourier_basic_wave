let time = 0;
let wave = [];
let path = [];

let slider;

function setup() {
	createCanvas(windowWidth, windowHeight / 1.2);
	slider = createSlider(1, 50, 5);
}

function draw() {
	background(0);
	translate(150, 200);

	let x = 0;
	let y = 0;

	for (let i = 0; i < slider.value(); i++) {
		let prevx = x;
		let prevy = y;

		let n = i * 2 + 1;
		let radius = 75 * (4 / (n * PI));
		x += radius * cos(n * time);
		y += radius * sin(n * time);

		stroke(255, 100);
		noFill();
		ellipse(prevx, prevy, radius * 2);

		stroke(255);
		line(prevx, prevy, x, y);
	}
	wave.unshift(y);

	translate(200, 0);
	line(x - 200, y, 0, wave[0]);
	beginShape();
	noFill();
	for (let i = 0; i < wave.length; i++) {
		vertex(i, wave[i]);
	}
	endShape();

	time += 0.01;

	if (wave.length > 2000) {
		wave.pop();
	}

	// background(0);
	// translate(200, height / 2);

	// let radius = 100;
	// stroke(255);
	// noFill();
	// ellipse(0, 0, radius * 2);

	// let x = radius * cos(time);
	// let y = radius * sin(time);
	// wave.unshift(y);
	// fill(255);
	// line(0, 0, x, y);
	// ellipse(x, y, 10, 10);

	// translate(200, 0);
	// line(x - 200, y, 0, wave[0]);
	// beginShape();
	// noFill();
	// for (let i = 0; i < wave.length; ++i) {
	// 	vertex(i, wave[i]);
	// }
	// endShape();

	// time += 0.05;
	// if (wave.length > 1000) {
	// 	wave.pop();
	// }
}
