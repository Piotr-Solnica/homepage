{
    const welcome = () => {
        console.log("Witam wszystkich zainteresowanych moja stroną!");
    }

    const toggleBackground = () => {
        const mainPage = document.querySelector(".js-mainPage");
        const themeName = document.querySelector(".js-themeName");

        mainPage.classList.toggle("navigation__button--dark");
        themeName.innerText = mainPage.classList.contains("js-navigation__button--dark") ? "jasne" : "ciemne";
    }

    const init = () => {
        const button = document.querySelector(".js-navigation__button");
        button.addEventListener("click", toggleBackground);
    }
    init();
    welcome();
}