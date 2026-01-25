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
  
 function showGreeting(name) {
  const message = document.getElementById("message");
  message.textContent = "Sveiki, " + name + "!";
  message.style.color = "green";
}

document.getElementById("greetBtn").addEventListener("click", () => {
  const nameInput = document.getElementById("username").value;
  showGreeting(nameInput);
});
function showGreeting(name) {
  const message = document.getElementById("message");

  if (name === "") {
    message.textContent = "Lūdzu, ievadi savu vārdu!";
    message.style.color = "red";
  } else {
    message.textContent = "Sveiki, " + name + "!";
    message.style.color = "green";
  }
}
