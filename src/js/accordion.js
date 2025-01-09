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

      panels.forEach((panel) => {
        if (panel.classList.contains('active')) {
          const panelId = panel.getAttribute('id');

          //console.log(panelId);
          btns.forEach((btn) => {
            btn.classList.remove('active');
          });

          if (btn.getAttribute('data-target') === panelId) {
            btn.classList.add('active');
          }
        }
      });

      //console.log(targetId);
    });
  });
}
