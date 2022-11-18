const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')
/*addEventListener('click', () =>{
    desktopMenu.classList.toggle('inactive')
})*/;

const showDesktopMenu=()=>{
    desktopMenu.classList.toggle('inactive');
}
const showMobileMenu=()=>{
    mobileMenu.classList.toggle('inactive')
}

burguerMenu.addEventListener('click',showMobileMenu);
menuEmail.addEventListener('click',showDesktopMenu);


