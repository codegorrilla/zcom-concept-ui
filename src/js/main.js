import '../scss/styles.scss';

import { setAccordion } from './accordion';
import { setTabs } from './tab';

setAccordion();
setTabs();

const scrollableDiv = document.querySelector('.scrollable');

scrollableDiv.addEventListener('scroll', () => {
  console.log('Scrolled!');
});
