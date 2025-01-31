import '../scss/styles.scss';

import { setAccordion } from './accordion';
import { trending_tabs } from './tab';
import { setScroll } from './scroll';
import { offCanvas } from './off-canvas';
import { stickyHeader2 } from './sticky';
//import { stickySidebar } from './sticky';
//import { stickyHeader } from './sticky';

setAccordion();
trending_tabs();
setScroll();
offCanvas();
stickyHeader2();

//toggling widget settings
const toggleSettings = () => {
	const ctrlBtn = document.querySelector('.widget-ctrl');
	const ctrlPanel = document.querySelector('.settings-panel');

	ctrlBtn.addEventListener('click', () => {
		ctrlPanel.classList.toggle('hidden');
		ctrlBtn.querySelector('img').classList.toggle('rotate');

		if (ctrlPanel.classList.contains('hidden')) {
			ctrlBtn.querySelector('span').innerText = 'Settings';
		} else {
			ctrlBtn.querySelector('span').innerText = 'Close Settings';
		}
	});
};

toggleSettings();

//add/remove widget items
const ctrlWidget = () => {
	const widgetPanel = document.querySelector('.settings-panel');
	const widgetList = widgetPanel.querySelector('.feature-items');

	const widgetItems = widgetList.querySelectorAll('.widget-items');

	widgetItems.forEach((widgetItem) => {
		widgetItem.addEventListener('click', () => {
			const itemId = widgetItem.getAttribute('data-panel');

			widgetItem.classList.toggle('active');
			widgetItem.querySelector('a').classList.toggle('remove');
			document.getElementById(itemId).classList.toggle('hidden');
		});
	});
};

ctrlWidget();

//goto top button
const gotoTop = () => {
	const topBtn = document.querySelector('.goto-top');

	window.addEventListener('scroll', () => {
		if (window.scrollY > 400) {
			topBtn.classList.add('show');
		} else {
			topBtn.classList.remove('show');
		}
	});

	topBtn.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	});
};

gotoTop();

//read full story cta
const readFullStory = () => {
	const shade = document.querySelector('.shade');
	const readMoreBtn = shade.querySelector('.cta');
	const fullStory = document.querySelector('.full-story');

	readMoreBtn.addEventListener('click', () => {
		fullStory.classList.toggle('hidden');
		shade.classList.toggle('hidden');
	});
};

readFullStory();
