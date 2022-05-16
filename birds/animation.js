function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	const image = document.querySelector(`div[data-image="${e.keyCode}"]`);

	if (!audio)
		return ;
	key.classList.add('playing');
	image.classList.add('playing');
	audio.currentTime = 0;
	promise = new Promise(audio.play());
	promise.then(removeTransition(key));
}

function removeTransition(e) {
	// if (e.proportyName !== 'transition')
	// 	return ;
	e.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
const images = document.querySelectorAll('.image');

// keys.forEach(key => key.addEventListener('transitioned', removeTransition));
window.addEventListener('keydown', playSound);
