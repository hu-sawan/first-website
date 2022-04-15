let section = document.querySelector(".skills");
let progress = document.querySelectorAll(".prog span");

window.onscroll = function () {
	if (window.scrollY >= section.offsetTop - 250) {
		progress.forEach((span) => {
		span.style.width = span.dataset.width;
		});
	}
};