const menuEmail = document.querySelector('.navbar-email');
//const desktopMenu = document.querySelector('.desktop-menu');
const desktopMenu = document.querySelector('.inactive');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}


// menuEmail.addEventListener('click', () =>{
//     desktopMenu.classList.toggle('inactive');
// });



// const toggleDesktopMenu = () => {
//     desktopMenu.classList.toggle('inactive');
// };
// menuEmail.addEventListener('click', toggleDesktopMenu);

// // const toggleMobileMenu = () =>{
// //     mobileMenu.classList.toggle('inactive');
// // }
// // menuHamIcon.addEventListener('click', toggleMobileMenu);