{
    const welcome = () => {
        console.log("Witam wszystkich zainteresowanych moja stroną!");
    }

    const toggleBackground = () => {
        const mainPage = document.querySelector(".mainPage");
        const themeName = document.querySelector(".themeName");

        mainPage.classList.toggle("navigation__button--dark");
        themeName.innerText = mainPage.classList.contains("navigation__button--dark") ? "jasne" : "ciemne";
    }

    const init = () => {
        const button = document.querySelector(".navigation__button");
        button.addEventListener("click", toggleBackground);
    }
    init();
    welcome();
}