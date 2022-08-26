 const nav_email = document.querySelector(`.navbar-email`);
const desktopMenu = document.querySelector(`.desktop-menu`);

 nav_email.addEventListener(`click`, toggleDesktopMenu);

 function toggleDesktopMenu(){
    console.log(`click_desktopMenu`)
    desktopMenu.classList.toggle(`inactive`);
 }