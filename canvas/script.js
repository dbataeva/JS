function draw(event) {
	if (!isDrawing) {
		return ;
	}
	context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	context.beginPath();
	context.moveTo(lastX, lastY);
	context.lineTo(event.offsetX, event.offsetY);
	context.stroke();
	lastX = event.offsetX;
	lastY = event.offsetY;
	if (context.lineWidth < 50) {
		context.lineWidth += 0.25;
	}
	if (hue < 360) {
		++hue;
	} else {
		hue = 0;
	}
	return ;
}

const canvas = document.querySelector("#draw");
const context = canvas.getContext("2d");

let isDrawing = false;
let lastX;
let lastY;
let hue = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.lineJoin = "round";
context.lineCap = "round";

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (event) => {
	context.lineWidth = 1;
	lastX = event.offsetX;
	lastY = event.offsetY;
	isDrawing = true;
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
