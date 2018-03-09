var landing = document.querySelector("#landing");

function resizeLanding() {
	var height = window.innerHeight + "px";
	landing.style.height = height;
	console.log(height);
}

window.addEventListener('resize', resizeLanding); 
window.addEventListener('load', resizeLanding);