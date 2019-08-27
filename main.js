//  Increment
var value =0;
document.getElementById("no").innerText = value;

function inc() {
	value = value+1;
	document.getElementById("no").innerText = value;
}

document.getElementById("increment").addEventListener("click", inc);

// Decrement
function dec() {
	value=value-1;
document.getElementById("no").innerText = value;
}
document.getElementById("decrement").addEventListener("click", dec);



// Reset
function reset() {
	var value=0;
	document.getElementById("no").innerText = value;
}

document.getElementById("reset").addEventListener("click", reset);