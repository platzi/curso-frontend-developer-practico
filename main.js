const email = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector(".desktop-menu");
const mobilMenu = document.querySelector(".mobile-menu");
const menuHamlist = document.querySelector(".menu");
email.addEventListener('click', toggleDesktopMenu);
menuHamlist.addEventListener('click',toggleMobilMenu);

function toggleDesktopMenu(){
    menuDesktop.classList.toggle('inactive');
}

function toggleMobilMenu(){
    mobilMenu.classList.toggle('inactive');
}