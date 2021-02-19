const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const entryButton = document.getElementById('entryButton');
const landingPage = document.getElementById('landingPage');

const tl = new gsap.timeline({
	paused: true,
	onComplete: removeLandingPage,
});

tl.to("#section1", {duration: 1, x: -2000})
.to("#section2", {duration: 2, delay: 0.25, x: 2000}, "-= 1")
.to("#section3", {duration: 2, delay: 0.25, x: -2000}, "-= 1");

entryButton.onclick = function() {
	tl.play();
};

function removeLandingPage () {
		landingPage.style.display = 'none';
		console.log('Shout out to GSAP!');
};





function leftExpandFunctionality () {
	console.log('please work!');
	const leftExpandQuestion = document.getElementById('left-expand');
	const leftExpandContent = document.getElementById('left-expand-content');
	const leftExpandButton = document.getElementById('left-expand-mark-container');
	leftExpandQuestion.classList.toggle('leftExpanded');
	leftExpandContent.classList.toggle('leftExpanded');
	leftExpandButton.classList.toggle('leftExpanded');
};

