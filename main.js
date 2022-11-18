const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
/*addEventListener('click', () =>{
    desktopMenu.classList.toggle('inactive')
})*/;

const showDesktopMenu=()=>{
    desktopMenu.classList.toggle('inactive')
}

menuEmail.addEventListener('click',showDesktopMenu);


