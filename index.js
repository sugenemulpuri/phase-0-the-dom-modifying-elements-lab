// Write your code here!


const main = document.querySelector("main#main")

main.remove();

const newHeader = document.createElement("h1");

newHeader.setAttribute('id','victory');

const victory = document.getElementById("victory");


const name = "Sugene is the champion";

newHeader.innerHTML = name;



// document.getElementById("victory").textContent = "Sugene is the champion";

