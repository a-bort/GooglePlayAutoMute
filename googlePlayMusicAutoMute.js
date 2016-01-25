console.log("Automute running");

prevVolume = 0;

setInterval(function(){
	var volumeSlider = document.getElementById("material-vslider");
	var currentTitle = document.getElementById("currently-playing-title");
	if(currentTitle.textContent == "We'll be right back"){
		prevVolume = volumeSlider.getAttribute("value");
		volumeSlider.setAttribute("value", 0);
	} else if(volumeSlider.getAttribute("value") == "0"){
		volumeSlider.setAttribute("value", prevVolume);
	}
}, 200);
