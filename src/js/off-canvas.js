function offCanvas() {
	const trigger = document.querySelector('.offcanvas-menu-btn');
	const offCanvasMenu = document.getElementById('offcanvas-menu');
	const closeBtn = document.getElementById('offcanvas-close-btn');

	trigger.addEventListener('click', () => {
		offCanvasMenu.classList.add('open');
	});

	//close the off-canvas menu
	closeBtn.addEventListener('click', () => {
		offCanvasMenu.classList.remove('open');
	});
}

export { offCanvas };
