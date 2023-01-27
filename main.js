const navMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const toggleDesktopMenu = () =>{
      desktopMenu.classList.toggle('inactive');
    };

navMail.addEventListener('click', toggleDesktopMenu);

