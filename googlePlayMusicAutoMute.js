console.log("Automute running");

window.prevVolume = 0;

setInterval(function(){
	var volumeSlider = document.getElementById("material-vslider");
	var currentTitle = document.getElementById("currently-playing-title");
	if(currentTitle.textContent == "We'll be right back"){
		var volume = volumeSlider.getAttribute("value");
		if(volume != "0"){
			window.prevVolume = volume;
			volumeSlider.setAttribute("value", 0);
		}
	} else if(volumeSlider.getAttribute("value") == "0"){
		volumeSlider.setAttribute("value", window.prevVolume);
	}
}, 200);
