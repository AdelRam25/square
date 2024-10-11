let square = document.getElementById("square");
let black = document.getElementById("black");
let random = document.getElementById("random");


black.onclick = function () {
  square.style.backgroundColor = "black";
};

random.onclick = function () {
let red = Math.ceil(Math.random() * 255);
let green = Math.ceil(Math.random() * 255);
let blue = Math.ceil(Math.random() * 255);
  square.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
};

range.oninput = function(){
    square.style.opacity = range.value 
}




