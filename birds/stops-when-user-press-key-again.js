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

	let timeId = setInterval(() => {
		audio.currentTime = 0;
		audio.play();
	}, audio.duration * 1000);

	if (timeout.has(key)) {
		clearInterval(timeout.get(key));
		clearInterval(timeId);
		timeout.delete(key);
		audio.pause();
		audio.currentTime = 0;
		key.classList.remove('playing');
		image.classList.remove('playing');

		return ;
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

	let timeId = setInterval(() => {
		sounds[index].currentTime = 0;
		sounds[index].play();
	}, sounds[index].duration * 1000);

	if (timeout.has(this)) {
		clearInterval(timeout.get(this));
		clearInterval(timeId);
		timeout.delete(this);
		sounds[index].pause();
		sounds[index].currentTime = 0;
		this.classList.remove('playing');
		images[index].classList.remove('playing');

		return;
	}
	
	timeout.set(this, timeId);
}

function playOnClickImage() {
	const index = images.indexOf(this);

	this.classList.add('playing');
	keys[index].classList.add('playing');
	sounds[index].currentTime = 0;
	sounds[index].play();

	let timeId = setInterval(() => {
		sounds[index].currentTime = 0;
		sounds[index].play();
	}, sounds[index].duration * 1000);

	if (timeout.has(keys[index])) {
		clearInterval(timeout.get(keys[index]));
		clearInterval(timeId);
		timeout.delete(keys[index]);
		sounds[index].pause();
		sounds[index].currentTime = 0;
		this.classList.remove('playing');
		keys[index].classList.remove('playing');

		return ;
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


