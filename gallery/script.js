function removeOpenFromOtherPanel() {
	panels.forEach(panel => {
		if (panel.classList.contains('open')) {
			panel.classList.remove('open');
			panel.classList.remove('open-active');
		}
	})
	return ;
}

function showPicture(event) {
	let mouseWidth = event.clientX;
	let i = 0;

	for (; i < panels.length; ++i) {
		mouseWidth -= panels[i].clientWidth;
		if (mouseWidth <= 0) {
			break;
		}
	}
	if (!panels[i].classList.contains('open')) {
		removeOpenFromOtherPanel();
		panels[i].classList.add('open');
		panels[i].classList.add('open-active');
	}
	return ;
}

window.addEventListener('mousemove', showPicture);

let panels = Array.from(document.querySelectorAll(".panel"));
