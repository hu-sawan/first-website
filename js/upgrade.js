let section = document.querySelector(".skills");
let progress = document.querySelectorAll(".prog span");

window.onscroll = function () {
	if (window.scrollY >= section.offsetTop - 250) {
		progress.forEach((span) => {
		span.style.width = span.dataset.width;
		});
	}
};

let countDownDate = new Date("May 17, 2022 19:55:45").getTime();
let counter = setInterval(() => {
	//Get Current Date
	
	let dateNow = new Date().getTime();
	//Find the date difference BTW now and countdown date
	let dateDiff = countDownDate - dateNow ;
	
	//Get time units
	let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
	document.querySelector(".days").innerHTML = days  < 10 ? `0${days}` : days;
	
	let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
	document.querySelector(".hours").innerHTML = hours  < 10 ? `0${hours}` : hours;
	
	let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
	document.querySelector(".minutes").innerHTML = minutes  < 10 ? `0${minutes}` : minutes;
	
	let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
	document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds ;
	
	if (dateDiff < 0) {
		clearInterval(counter);
	}
}, 1000);

let stat = document.querySelectorAll(".stats .box .number");
let statSec = document.querySelector(".stats");
let started = false; // Function started ? no

window.onscroll =  function () {
	if (window.scrollY >= statSec.offsetTop) {
		if (!started) {
			stat.forEach((number) => startCount(number));
		}
		started = true;
	}
};

function startCount(el) {
	let goal = el.dataset.goal;
	let count = setInterval (() => {
		el.textContent++;
		if (el.textContent == goal) {
			clearInterval(count);
		}
	}, 2000 / goal );
}