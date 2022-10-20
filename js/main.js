
   import engine from './components/engine.json' assert {type: 'json'};

   import transmission from './components/transmission.json' assert {type: 'json'};

   import exhaust from './components/exhaust.json' assert {type: 'json'};

   import coolingSystem from './components/coolingSystem.json' assert {type: 'json'};

   import fuelSystem from './components/fuelSystem.json' assert {type: 'json'};

   import hvac from './components/HVAC.json' assert {type: 'json'};

   import suspensionSystem from './components/suspensionSystem.json' assert {type: 'json'};

   import excessParts from './components/excessParts.json' assert {type: 'json'};

//    Excel to JSON

// var XLSX = require("xlsx");
// var workbook = XLSX.readFile("engine.xlsx");
// var sheet_name_list = workbook.SheetNames;
// console.log(sheet_name_list); // getting as Sheet1

// sheet_name_list.forEach(function (y) {
//   var worksheet = workbook.Sheets[y];
//   //getting the complete sheet
//   // console.log(worksheet);

//   var headers = {};
//   var data = [];
//   for (z in worksheet) {
//     if (z[0] === "!") continue;
//     //parse out the column, row, and value
//     var col = z.substring(0, 1);
//     // console.log(col);

//     var row = parseInt(z.substring(1));
//     // console.log(row);

//     var value = worksheet[z].v;
//     // console.log(value);

//     //store header names
//     if (row == 1) {
//       headers[col] = value;
//       // storing the header names
//       continue;
//     }

//     if (!data[row]) data[row] = {};
//     data[row][headers[col]] = value;
//   }
//   //drop those first two rows which are empty
//   data.shift();
//   data.shift();
//   console.log(data);
// });


const toMoney = function (num) {
	// num = num.toString();
	num = String(num).replace(/(.)(?=(\d{3})+$)/g,'$1,');
	return num

}


// Load Car Parts

function showParts() {
for (const part of Object.keys(engine)) {
	

	displayEngine.innerHTML += 
	
	`
	<div style="border: solid 1px #800813 ; color:#800813;  text-align: center;" value="${part} : $${toMoney(engine[part])}"> ${part} : $${toMoney(engine[part])}  </div>`



}



for (const part of Object.keys(transmission)) {
	

	displayTransmission.innerHTML += 
	
	`
	<div style="border: solid 1px #800813 ; color:#800813;  text-align: center;" value="${part} : $${toMoney(transmission[part])}"> ${part} : $${toMoney(transmission[part])}  </div>`



}




for (const part of Object.keys(exhaust)) {
	

	displayExhaust.innerHTML += 
	
	`
	<div style="border: solid 1px #800813 ; color:#800813;  text-align: center;" value="${part} : $${toMoney(exhaust[part])}"> ${part} : $${toMoney(exhaust[part])}  </div>`



}


for (const part of Object.keys(coolingSystem)) {
	

	displayCoolingSystem.innerHTML += 
	
	`
	<div style="border: solid 1px #800813 ; color:#800813;  text-align: center;" value="${part} : $${toMoney(coolingSystem[part])}"> ${part} : $${toMoney(coolingSystem[part])}  </div>`



}



for (const part of Object.keys(fuelSystem)) {
	

	displayFuelSystem.innerHTML += 
	
	`
	<div style="border: solid 1px #800813 ; color:#800813;  text-align: center;" value="${part} : $${toMoney(fuelSystem[part])}"> ${part} : $${toMoney(fuelSystem[part])}  </div>`



}




for (const part of Object.keys(hvac)) {
	

	displayHVAC.innerHTML += 
	
	`
	<div style="border: solid 1px #800813 ; color:#800813;  text-align: center;" value="${part} : $${toMoney(hvac[part])}"> ${part} : $${toMoney(hvac[part])}  </div>`



}



for (const part of Object.keys(suspensionSystem)) {
	

	displaySuspensionSystem.innerHTML += 
	
	`
	<div style="border: solid 1px #800813 ; color:#800813;  text-align: center;" value="${part} : $${toMoney(suspensionSystem[part])}"> ${part} : $${toMoney(suspensionSystem[part])}  </div>`



}


for (const part of Object.keys(excessParts)) {
	

	displayExcessParts.innerHTML += 
	
	`
	<div style="border: solid 1px #800813 ; color:#800813;  text-align: center;" value="${part} : $${toMoney(excessParts[part])}"> ${part} : $${toMoney(excessParts[part])}  </div>`



}




}

showParts();




(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var carousel = function() {
		$('.featured-carousel').owlCarousel({
		autoplay: false,
		autoplayHoverPause: true,
	    loop:true,
	    margin:30,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:true,
	    dots: true,
	    items: 1,
	    navText : ["<p><small>Prev</small><span class='ion-ios-arrow-round-back'></span></p>","<p><small>Next</small><span class='ion-ios-arrow-round-forward'></span></p>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});

	};
	carousel();

})(jQuery);



//SHOW ENGINE


// Get the modal
var engineModal = document.getElementById("showEngine");

// Get the button that opens the modal
var engineModalBtn = document.getElementById("engineParts");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeEngine")[0];

// When the user clicks on the button, open the modal
engineModalBtn.onclick = function() {
	engineModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  engineModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == engineModal) {
    engineModal.style.display = "none";
  }
}




//SHOW TRANSMISSION

// Get the modal
var tranmissionModal = document.getElementById("showTransmission");

// Get the button that opens the modal
var tranmissionModalBtn = document.getElementById("transmissionParts");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeTransmission")[0];

// When the user clicks on the button, open the modal
tranmissionModalBtn.onclick = function() {
	tranmissionModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	tranmissionModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == tranmissionModal) {
    tranmissionModal.style.display = "none";
  }
}



//SHOW EXHAUST

// Get the modal
var exhaustModal = document.getElementById("showExhaust");

// Get the button that opens the modal
var exhaustModalBtn = document.getElementById("exhaustParts");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeExhaust")[0];

// When the user clicks on the button, open the modal
exhaustModalBtn.onclick = function() {
	exhaustModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	exhaustModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == exhaustModal) {
    exhaustModal.style.display = "none";
  }
}


// SHOW COOLING SYSTEM



// Get the modal
var coolingSystemModal = document.getElementById("showCoolingSystem");

// Get the button that opens the modal
var coolingSystemModalBtn = document.getElementById("coolingSystemParts");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeCoolingSystem")[0];

// When the user clicks on the button, open the modal
coolingSystemModalBtn.onclick = function() {
	coolingSystemModal
.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	coolingSystemModal
.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == coolingSystemModal
) {
    coolingSystemModal
.style.display = "none";
  }
}




// SHOW FUEL SYSTEM

// Get the modal
var fuelSystemModal = document.getElementById("showFuelSystem");

// Get the button that opens the modal
var fuelSystemModalBtn = document.getElementById("fuelSystemParts");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeFuelSystem")[0];

// When the user clicks on the button, open the modal
fuelSystemModalBtn.onclick = function() {
	fuelSystemModal
.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	fuelSystemModal
.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == fuelSystemModal
) {
    fuelSystemModal
.style.display = "none";
  }
}




// SHOW FUEL SYSTEM

// Get the modal
var hvacModal = document.getElementById("showHVAC");

// Get the button that opens the modal
var hvacModalBtn = document.getElementById("hvacParts");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeHVAC")[0];

// When the user clicks on the button, open the modal
hvacModalBtn.onclick = function() {
	hvacModal
.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	hvacModal
.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == hvacModal
) {
    hvacModal
.style.display = "none";
  }
}










//SHOW SUSPENSION SYSTEM 

// Get the modal
var suspensionSystemModal = document.getElementById("showSuspensionSystem");

// Get the button that opens the modal
var suspensionSystemModalBtn = document.getElementById("suspensionSystemParts");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeSuspensionSystem")[0];

// When the user clicks on the button, open the modal
suspensionSystemModalBtn.onclick = function() {
	suspensionSystemModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	suspensionSystemModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == suspensionSystemModal) {
    suspensionSystemModal.style.display = "none";
  }
}


//SHOW EXCESS 

// Get the modal
var excessPartsModal = document.getElementById("showExcessParts");

// Get the button that opens the modal
var excessPartsModalBtn = document.getElementById("excessParts");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeExcessParts")[0];

// When the user clicks on the button, open the modal
excessPartsModalBtn.onclick = function() {
	excessPartsModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	excessPartsModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == excessPartsModal) {
   excessPartsModal.style.display = "none";
  }
}
