export function trending_tabs() {
	const tabs = document
		.getElementById('trending_topics')
		.querySelectorAll('.tab');
	const contents = document
		.getElementById('trending_topics')
		.querySelectorAll('.tab-content');

	tabs.forEach((tab) => {
		tab.addEventListener('click', () => {
			const targetId = tab.getAttribute('data-target');

			contents.forEach((content) => {
				content.classList.remove('active');
			});
			document.getElementById(targetId).classList.add('active');

			contents.forEach((content) => {
				if (content.classList.contains('active')) {
					const contentId = content.getAttribute('id');

					//console.log(panelId);
					tabs.forEach((tab) => {
						tab.classList.remove('active');
					});

					if (tab.getAttribute('data-target') === contentId) {
						tab.classList.add('active');
					}
				}
			});
		});
	});
}

export function top_movers() {
	const tabs = document.getElementById('top_movers').querySelectorAll('.tab');
	const contents = document
		.getElementById('top_movers')
		.querySelectorAll('.tab-content');

	tabs.forEach((tab) => {
		tab.addEventListener('click', () => {
			const targetId = tab.getAttribute('data-target');

			contents.forEach((content) => {
				content.classList.remove('active');
			});
			document.getElementById(targetId).classList.add('active');

			contents.forEach((content) => {
				if (content.classList.contains('active')) {
					const contentId = content.getAttribute('id');

					//console.log(panelId);
					tabs.forEach((tab) => {
						tab.classList.remove('active');
					});

					if (tab.getAttribute('data-target') === contentId) {
						tab.classList.add('active');
					}
				}
			});
		});
	});
}
