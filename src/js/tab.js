export function setTabs(){
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('data-target');

        contents.forEach((content) => {
          content.classList.remove('active');
        });
        document.getElementById(targetId).classList.add('active');
      });
    });
}