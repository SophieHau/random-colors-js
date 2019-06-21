var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button")



function setGradient() {
  body.style.background = "linear-gradient(to right, "
  + color1.value
  + ","
  + color2.value
  + ")";

  css.textContent = body.style.background;
}

function randomRgb() {
  var rgb = "rgb(" +
  Math.floor((Math.random() * 255) + 1) + ", " +
  Math.floor((Math.random() * 255) + 1) + ", " +
  Math.floor((Math.random() * 255) + 1) +")";
  return rgb
}

function setRandomGradient() {
  color1 = randomRgb();
  color2 = randomRgb();
  body.style.background = "linear-gradient(to right, "
  + color1
  + ","
  + color2
  + ")";

  css.textContent = body.style.background;
}

setGradient()

button.addEventListener("click", setRandomGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
