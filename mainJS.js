const timelineButton = document.getElementsByClassName('timelineButton');
const buttonFill = document.getElementsByClassName('buttonBlank');

for (let a=0; a < timelineButton.length; a++) {
		timelineButton[a].onclick = function() {
			this.nextElementSibling.classList.toggle('clock');
			this.firstElementChild.classList.toggle('buttonFill');
		}
}


const leftContainer = document.getElementById('left-expand-mark-container');
const leftTooltip = document.getElementById('left-expand-tooltip');
	
leftContainer.addEventListener("mouseover", leftHover1, false);
leftContainer.addEventListener("mouseout", leftHover2, false);

function leftHover1 (){
	leftTooltip.style.visibility = 'visible';
}

function leftHover2 (){
	leftTooltip.style.visibility = 'hidden';
}



const rightContainer = document.getElementById('right-expand-mark-container');
const rightTooltip = document.getElementById('right-expand-tooltip');
	
rightContainer.addEventListener("mouseover", rightHover1, false);
rightContainer.addEventListener("mouseout", rightHover2, false);

function rightHover1 (){
	rightTooltip.style.visibility = 'visible';
}

function rightHover2 (){
	rightTooltip.style.visibility = 'hidden';
}





