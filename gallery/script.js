function showPictureOnClick() {
	if (this.classList.contains('open')) {
		this.classList.remove('open-active');
		this.classList.remove('open');

		return ;
	}

	panels.forEach(panel => {
		if (panel.classList.contains('open')) {
			panel.classList.remove('open-active');
			panel.classList.remove('open');
		}

		return ;
	})

	this.classList.add('open');
	this.classList.add('open-active');

	return ;
}

let panels = Array.from(document.querySelectorAll(".panel"));

panels.forEach(panel => {
	panel.addEventListener('click', showPictureOnClick);

	return ;
});
