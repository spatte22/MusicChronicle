const timelineButton = document.getElementsByClassName('timelineButton');
const buttonFill = document.getElementsByClassName('buttonBlank');
let a;
for (a=0; a < timelineButton.length; a++) {
		timelineButton[a].onclick = function() {
			this.nextElementSibling.classList.toggle('clock');
			this.firstElementChild.classList.toggle('buttonFill');
		}
}

function enterChronicle() {
	let enterButton = document.getElementById('landingPage');
	if (enterButton.style.display == 'flex') {
		enterButton.style.display = 'none';
	}
}

