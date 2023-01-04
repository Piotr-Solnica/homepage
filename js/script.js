console.log("dobry wieczór, miłej pracy :) Ten kod juz jest w repozytorium!");

let button = document.querySelector(".navigation__button");
let mainPage = document.querySelector(".mainPage");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {

    mainPage.classList.toggle("navigation__button--dark");

    themeName.innerText = mainPage.classList.contains("navigation__button--dark") ? "jasne" : "ciemne";

});