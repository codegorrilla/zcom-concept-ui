function setScroll() {
  const scrollableDiv = document.querySelector('.scrollable');

  scrollableDiv.addEventListener('scroll', () => {
    console.log('Scrolled!');
  });
}

export { setScroll };
