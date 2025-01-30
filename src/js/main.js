import '../scss/styles.scss';

import { setAccordion } from './accordion';
import { trending_tabs } from './tab';
import { top_movers } from './tab';
import { ear_suprise } from './tab';
import { setScroll } from './scroll';
import { offCanvas } from './off-canvas';
import { stickyHeader2 } from './sticky';
//import { stickySidebar } from './sticky';
//import { stickyHeader } from './sticky';

setAccordion();
trending_tabs();
top_movers();
ear_suprise();
setScroll();
offCanvas();
stickyHeader2();
//stickySidebar();
//stickyHeader();

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
