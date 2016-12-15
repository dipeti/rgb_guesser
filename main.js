var first;
var second;
var third;
var generateNumbers = function () {
	first = document.getElementById("first");
	second = document.getElementById("second");
	third = document.getElementById("third");
	third.innerHTML = Math.floor(Math.random()*256);
	second.innerHTML = Math.floor(Math.random()*256);
	first.innerHTML = Math.floor(Math.random()*256);

};
var setDivs = function () {
	var squares = document.getElementsByClassName("square");
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].style.background = "rgb("+Math.floor(Math.random()*246+10)+","+Math.floor(Math.random()*246+10)+"," + Math.floor(Math.random()*246+10)+")"
		squares[i].addEventListener("click", function () {
			
			if (this.style.background == "rgb("+first.innerHTML+", "+second.innerHTML+", " + third.innerHTML+")") {
					alert("success!");
			}else{
				fadeOut(this);
			}

		})
	}
	

	squares[Math.floor(Math.random()*squares.length)].style.background = "rgb("+first.innerHTML+","+second.innerHTML+"," + third.innerHTML+")";

}
window.onload = function () {
	generateNumbers();
	setDivs();
	console.log("generateNumbers");
};
var fadeOut = function (elem) {
	var op = 1;
	var timer = setInterval(function () {
		if (op<=0.1){
			clearInterval(timer);
		}
		elem.style.opacity = op;
		op -= 0.08;
	}, 20);
}