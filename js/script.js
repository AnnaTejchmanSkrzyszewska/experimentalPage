console.log("Smacznej kawusi!")

let navigationButton = document.querySelector(".js-navigationButton");
let header = document.querySelector(".header");
let footerButton = document.querySelector(".js-footerButton");
let textClass = document.querySelector(".js-body");
let nextColorName = document.querySelector(".js-nextColorName");

footerButton.addEventListener("click", () => {
textClass.classList.toggle("dark");
nextColorName.innerText = textClass.classList.contains("dark") ? "jasne" : "ciemne";
});

navigationButton.addEventListener("click", () => {
    header.remove();
});