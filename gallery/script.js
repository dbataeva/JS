function hidePicture() {
	this.classList.remove('open-active');
	this.classList.remove('open');

	return ;
}

function showPicture(event) {
	this.classList.add('open');
	this.classList.add('open-active');

	return ;
}

let panels = Array.from(document.querySelectorAll(".panel"));

panels.forEach(panel => {
	panel.addEventListener('mouseover', showPicture);
	panel.addEventListener('mouseout', hidePicture);

	return ;
});
