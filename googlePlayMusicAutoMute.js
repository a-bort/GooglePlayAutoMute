setInterval(function(){
	var volumeSlider = document.getElementById("material-vslider");
	var currentTitle = document.getElementById("currently-playing-title");
	if(currentTitle.textContent == "We'll be right back"){
		volumeSlider.setAttribute("value", 0)
	} else if(volumeSlider.getAttribute("value") == "0"){
		volumeSlider.setAttribute("value", 60)
	}
}, 200)
