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

//sticky header navigation
export function stickyHeader() {
	const header = document.getElementById('header-nav');
	const headerContent = document.querySelector('.header-content');
	let lastScrollY = window.scrollY;

	window.addEventListener('scroll', () => {
		// if (window.scrollY > 150) {
		// 	headerContent.classList.add('hide');
		// } else {
		// 	headerContent.classList.remove('hide');
		// }

		if (window.scrollY < lastScrollY) {
			//scrolling up
			header.classList.add('sticky');
		} else {
			//scrolling down
			header.classList.remove('sticky');
		}

		lastScrollY = window.scrollY;

		if (window.scrollY === 0) {
			//when the page is scrolled to the top, remove the sticky class
			header.classList.remove('sticky');
		}

		console.log(`I've scrolled ${window.scrollY} pixels`);

		//window.onscroll = console.log(`I've scrolled ${window.scrollY} pixels`);
	});
}

//sticky header navigation effect 2
export function stickyHeader2() {
	const headerContent = document.querySelector('.header-content');
	const headerTop = headerContent.querySelector('header');
	const headerNav = headerContent.querySelector('#header-nav');

	console.log(headerNav);

	window.onscroll = () => {
		if (window.scrollY > 80) {
			headerTop.classList.add('hidden');
			headerNav.classList.add('sticky');
		} else {
			headerTop.classList.remove('hidden');
			headerNav.classList.remove('sticky');
		}
	};
}
