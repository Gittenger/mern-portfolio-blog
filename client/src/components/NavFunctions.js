export const setActiveColor = activePage => {
	const page = activePage.toLowerCase();
	const navList = document.querySelectorAll(".nav-list > *");
	[].forEach.call(navList, node => {
		const link = node.querySelector("a");
		if (page === link.dataset.page) {
			link.classList.add("active-page");
		} else {
			link.classList.remove("active-page");
		}
	});
};
