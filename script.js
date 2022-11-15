const navEmail = document.querySelector('.navbar-email');
const deskMenu = document.querySelector('.desktop-menu');


navEmail.addEventListener('click', apperDesktopMenu);


function apperDesktopMenu(){
    console.log('click');
 deskMenu.classList.toggle('inactive');
}

