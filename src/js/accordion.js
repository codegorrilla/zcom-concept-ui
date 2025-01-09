export function setAccordion() {
  //selecting all accordion trigger buttons
  const btns = document.querySelectorAll('.accordion-header');
  const panels = document.querySelectorAll('.accordion-content');

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');

      panels.forEach((panel) => {
        panel.classList.remove('active');
      });

      document.getElementById(targetId).classList.add('active');

      //console.log(targetId);
    });
  });
}
