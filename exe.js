const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

emailMenu.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.toggleAttribute("hidden");
    console.log("asd");
}

const mobileicon = document.querySelector('.menu');
const mobilemenu = document.querySelector(".mobile-menu");

mobileicon.addEventListener("click",()=>{
    mobilemenu.toggleAttribute("hidden")
});
