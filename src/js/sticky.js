//sticky right sidebar
export function stickySidebar() {
	const sideBar = document.querySelector('.sidebar-content');

	if (sideBar) {
		const sticky = sideBar.offsetTop;

		window.onscroll = () => {
			if (window.scrollY > sticky) {
				sideBar.classList.add('sticky');
			} else {
				sideBar.classList.remove('sticky');
			}
		};
	}
}
