const rigthMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

rigthMenu.addEventListener('click', () =>{
    desktopMenu.classList.toggle('inactive');
})