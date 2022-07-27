const email=document.querySelector(`.navbar-email`);
const Desktopmenu=document.querySelector(`.desktop-menu`);

email.addEventListener(`click`,toggleDesktopMenu);


function toggleDesktopMenu(){
    Desktopmenu.classList.toggle(`inactive`)
}