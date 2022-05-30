function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	const image = document.querySelector(`div[data-image="${e.keyCode}"]`);

	if (!audio) {
		return ;
	}
	key.classList.add('playing');
	image.classList.add('playing');
	audio.currentTime = 0;
	audio.play();

	let timeId = setTimeout(() => {
		key.classList.remove('playing');
		image.classList.remove('playing');
	}, audio.duration * 1000);

	if (timeout.has(key)) {
		clearTimeout(timeout.get(key));
		timeout.delete(key);
	}

	timeout.set(key, timeId);
}

var timeout = new Map();

window.addEventListener('keydown', playSound);


function playOnClickKey() {
	const index = keys.indexOf(this);

	this.classList.add('playing');
	images[index].classList.add('playing');
	sounds[index].currentTime = 0;
	sounds[index].play();

	let timeId = setTimeout(() => {
		this.classList.remove('playing');
		images[index].classList.remove('playing');
	}, sounds[index].duration * 1000);

	if (timeout.has(this)) {
		clearTimeout(timeout.get(this));
		timeout.delete(this);
	}

	timeout.set(this, timeId);	
}

function playOnClickImage() {
	const index = images.indexOf(this);

	this.classList.add('playing');
	keys[index].classList.add('playing');
	sounds[index].currentTime = 0;
	sounds[index].play();

	let timeId = setTimeout(() => {
		this.classList.remove('playing');
		keys[index].classList.remove('playing');
	}, sounds[index].duration * 1000);

	if (timeout.has(keys[index])) {
		clearTimeout(timeout.get(keys[index]));
		timeout.delete(keys[index]);
	}

	timeout.set(keys[index], timeId);
}

const keys = Array.from(document.querySelectorAll(".key"));
const images = Array.from(document.querySelectorAll(".image"));
const sounds = Array.from(document.querySelectorAll("audio"));

keys.forEach(key => {
	key.addEventListener('click', playOnClickKey);
});

images.forEach(image => {
	image.addEventListener('click', playOnClickImage);
});
