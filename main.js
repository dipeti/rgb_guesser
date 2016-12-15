var generateNumbers = function () {
	var first = document.getElementById("first");
	var second = document.getElementById("second");
	var third = document.getElementById("third");
	third.innerHTML = Math.floor(Math.random()*256);
	second.innerHTML = Math.floor(Math.random()*256);
	first.innerHTML = Math.floor(Math.random()*256);

};
document.onload = function () {
	generateNumbers();
	console.log("generateNumbers");
};