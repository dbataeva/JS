function showPicture(event) {
	const mouseWidth = event.clientX;
	const windowWidth = window.innerWidth;
	
	for (let i = 0; i < panels.length; ++i) {
		
	}
}

window.addEventListener('mousemove', showPicture);

let panels = Array.from(document.querySelectorAll(".panel"));

console.log(panels[2].clientWidth);