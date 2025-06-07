function displayAll() {
	var allButton = document.getElementById('AllButton');
	if (allButton.checked === true){
		Array.from(document.querySelectorAll('.all')).forEach(function(el) {
			el.classList.remove('band-content-hidden');
		});
	} else if (allButton.checked === false){
		Array.from(document.querySelectorAll('.all')).forEach(function(el) {
			el.classList.add('band-content-hidden');
		});
	}
}

function displayBlack() {
	var blackButton = document.getElementById('BlackButton');
	if (blackButton.checked === true){
		Array.from(document.querySelectorAll('.black')).forEach(function(el) {
			el.classList.remove('band-content-hidden');
		});
	} else if (blackButton.checked === false){
		Array.from(document.querySelectorAll('.black')).forEach(function(el) {
			el.classList.add('band-content-hidden');
		});
	}
}

function displayBrutal() {
	var brutalButton = document.getElementById('BrutalButton');
	if (brutalButton.checked === true){
		Array.from(document.querySelectorAll('.brutal')).forEach(function(el) {
			el.classList.remove('band-content-hidden');
		});
	} else if (brutalButton.checked === false){
		Array.from(document.querySelectorAll('.brutal')).forEach(function(el) {
			el.classList.add('band-content-hidden');
		});
	}
}

function displayDeath() {
	var deathButton = document.getElementById('DeathButton');
	if (deathButton.checked === true){
		Array.from(document.querySelectorAll('.death')).forEach(function(el) {
			el.classList.remove('band-content-hidden');
		});
	} else if (deathButton.checked === false){
		Array.from(document.querySelectorAll('.death')).forEach(function(el) {
			el.classList.add('band-content-hidden');
		});
	}
}

function displayDjent() {
	var djentButton = document.getElementById('DjentButton');
	if (djentButton.checked === true){
		Array.from(document.querySelectorAll('.djent')).forEach(function(el) {
			el.classList.remove('band-content-hidden');
		});
	} else if (djentButton.checked === false){
		Array.from(document.querySelectorAll('.djent')).forEach(function(el) {
			el.classList.add('band-content-hidden');
		});
	}
}

function displayDoom() {
	var doomButton = document.getElementById('DoomButton');
	if (doomButton.checked === true){
		Array.from(document.querySelectorAll('.doom')).forEach(function(el) {
			el.classList.remove('band-content-hidden');
		});
	} else if (doomButton.checked === false){
		Array.from(document.querySelectorAll('.doom')).forEach(function(el) {
			el.classList.add('band-content-hidden');
		});
	}
}

function displayFolk() {
	var folkButton = document.getElementById('FolkButton');
	if (folkButton.checked === true){
		Array.from(document.querySelectorAll('.folk')).forEach(function(el) {
			el.classList.remove('band-content-hidden');
		});
	} else if (folkButton.checked === false){
		Array.from(document.querySelectorAll('.folk')).forEach(function(el) {
			el.classList.add('band-content-hidden');
		});
	}
}

function displayElectro() {
	var electroButton = document.getElementById('ElectroButton');
	if (electroButton.checked === true){
		Array.from(document.querySelectorAll('.electro')).forEach(function(el) {
			el.classList.remove('band-content-hidden');
		});
	} else if (electroButton.checked === false){
		Array.from(document.querySelectorAll('.electro')).forEach(function(el) {
			el.classList.add('band-content-hidden');
		});
	}
}

function displayHeavy() {
	var heavyButton = document.getElementById('HeavyButton');
	if (heavyButton.checked === true){
		Array.from(document.querySelectorAll('.heavy')).forEach(function(el) {
			el.classList.remove('band-content-hidden');
		});
	} else if (heavyButton.checked === false){
		Array.from(document.querySelectorAll('.heavy')).forEach(function(el) {
			el.classList.add('band-content-hidden');
		});
	}
}

function displayMelodic() {
	var melodicButton = document.getElementById('MelodicButton');
	if (melodicButton.checked === true){
		Array.from(document.querySelectorAll('.melodic')).forEach(function(el) {
			el.classList.remove('band-content-hidden');
		});
	} else if (melodicButton.checked === false){
		Array.from(document.querySelectorAll('.melodic')).forEach(function(el) {
			el.classList.add('band-content-hidden');
		});
	}
}

function displayProgressive() {
	var progressiveButton = document.getElementById('ProgressiveButton');
	if (progressiveButton.checked === true){
		Array.from(document.querySelectorAll('.progressive')).forEach(function(el) {
			el.classList.remove('band-content-hidden');
		});
	} else if (progressiveButton.checked === false){
		Array.from(document.querySelectorAll('.progressive')).forEach(function(el) {
			el.classList.add('band-content-hidden');
		});
	}
}

function displaySludge() {
	var sludgeButton = document.getElementById('SludgeButton');
	if (sludgeButton.checked === true){
		Array.from(document.querySelectorAll('.sludge')).forEach(function(el) {
			el.classList.remove('band-content-hidden');
		});
	} else if (sludgeButton.checked === false){
		Array.from(document.querySelectorAll('.sludge')).forEach(function(el) {
			el.classList.add('band-content-hidden');
		});
	}
}

function displaySymphonic() {
	var symphonicButton = document.getElementById('SymphonicButton');
	if (symphonicButton.checked === true){
		Array.from(document.querySelectorAll('.symphonic')).forEach(function(el) {
			el.classList.remove('band-content-hidden');
		});
	} else if (symphonicButton.checked === false){
		Array.from(document.querySelectorAll('.symphonic')).forEach(function(el) {
			el.classList.add('band-content-hidden');
		});
	}
}

function displayTechnical() {
	var technicalButton = document.getElementById('TechnicalButton');
	if (technicalButton.checked === true){
		Array.from(document.querySelectorAll('.technical')).forEach(function(el) {
			el.classList.remove('band-content-hidden');
		});
	} else if (technicalButton.checked === false){
		Array.from(document.querySelectorAll('.technical')).forEach(function(el) {
			el.classList.add('band-content-hidden');
		});
	}
}

function displayThrash() {
	var thrashButton = document.getElementById('ThrashButton');
	if (thrashButton.checked === true){
		Array.from(document.querySelectorAll('.thrash')).forEach(function(el) {
			el.classList.remove('band-content-hidden');
		});
	} else if (thrashButton.checked === false){
		Array.from(document.querySelectorAll('.thrash')).forEach(function(el) {
			el.classList.add('band-content-hidden');
		});
	}
}

function displayViking() {
	var vikingButton = document.getElementById('VikingButton');
	if (vikingButton.checked === true){
		Array.from(document.querySelectorAll('.viking')).forEach(function(el) {
			el.classList.remove('band-content-hidden');
		});
	} else if (vikingButton.checked === false){
		Array.from(document.querySelectorAll('.viking')).forEach(function(el) {
			el.classList.add('band-content-hidden');
		});
	}
}





