const menuEmail = document.querySelector('.navbar-email');
//const desktopMenu = document.querySelector('.desktop-menu');
const desktopMenu = document.querySelector('.inactive');

// menuEmail.addEventListener('click', toggleDesktopMenu);

// function toggleDesktopMenu() {
//     desktopMenu.classList.toggle('inactive');
// }


// menuEmail.addEventListener('click', () =>{
//     desktopMenu.classList.toggle('inactive');
// });



const toggleDesktopMenu = () => {
    desktopMenu.classList.toggle('inactive');
};
menuEmail.addEventListener('click', toggleDesktopMenu);