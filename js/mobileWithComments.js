	/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
		function clickButton() {
			
			//var divElem = document.querySelector('div');
			
			var x = document.getElementById("theButton");
			var y = document.getElementById("navigation");
			var z = document.getElementById("logo");
			var a = document.getElementsByTagName("article");
			if (x.className === "open") {
				//console.log("It is === open so make the class empty.");
				x.className = "";
				y.className = "";
				z.style.visibility = "visible";
				a[0].style.visibility = "visible";
			} else {
				x.className = "open";
				y.className = "large";
				z.style.visibility = "hidden";
				a[0].style.visibility = "hidden";
				
				//console.log("Not === open so make the class open");
			}
		}
	
	function runAtStart() {
		//console.log("Started");
		
			var y = document.getElementById("navigation");

			y.addEventListener('transitionrun', function() {
  				console.log('Transition Run fired');
			});

			y.addEventListener('transitionstart', function() {
  				console.log('Transition Start fired');
			});
	}	

	if (window.attachEvent) {window.attachEvent('onload', runAtStart);}
	else if (window.addEventListener) {window.addEventListener('load', runAtStart, false);}
	else {document.addEventListener('load', runAtStart, false);}
	
	//if (window.attachEvent) {window.attachEvent('onload', theButton.onclick = clickButton);}
	//else if (window.addEventListener) {window.addEventListener('load', theButton.onclick = clickButton, false);}
	//else {document.addEventListener('load', theButton.onclick = clickButton, false);}
	
	 //object.addEventListener("click", myScript);