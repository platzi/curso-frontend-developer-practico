const menuEmail = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');

menuEmail.addEventListener( 'click' , toggleDesktopMenu )

function toggleDesktopMenu () {
    console.log('click')
    menu.classList.toggle('inactive');
    }
