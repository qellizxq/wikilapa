console.log("JS pieslēgts un darbojas");
console.log("JS pieslēgts un darbojas");

// elements
const button = document.getElementById("changeBtn");
const input = document.getElementById("nameInput");
const output = document.getElementById("outputText");

// CLICK notikums
button.addEventListener("click", () => {
  output.textContent = "Sveiki, " + input.value + "!";
  output.style.color = "blue";
});

// INPUT notikums
input.addEventListener("input", () => {
  output.textContent = "Tu raksti: " + input.value;