const timelineButton = document.getElementsByClassName('timelineButton');
const buttonFill = document.getElementsByClassName('buttonBlank');

for (let a=0; a < timelineButton.length; a++) {
		timelineButton[a].onclick = function() {
			this.nextElementSibling.classList.toggle('clock');
			this.firstElementChild.classList.toggle('buttonFill');
		}
}


const container = document.getElementById('left-expand-mark-container');
const tooltip = document.getElementById('left-expand-tooltip');
	
container.addEventListener("mouseover", hover1, false);
container.addEventListener("mouseout", hover2, false);

function hover1 (){
	tooltip.style.visibility = 'visible';
}

function hover2 (){
	tooltip.style.visibility = 'hidden';
}





