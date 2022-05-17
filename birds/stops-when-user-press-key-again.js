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
