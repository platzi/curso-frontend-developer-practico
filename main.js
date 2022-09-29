const menuEmail = document.querySelector('.navbar-email');//Seleccionamos navbar email que esta dentro de navbar-righ
const desktopMenu = document.querySelector('.desktop-menu');//Seleccionamos todo el menu que parece y desaparece en la parte derecha cclic en email
const menuHamIcon = document.querySelector('.menu');//Seleccionamos el icono hamburguesa
const mobileMenu = document.querySelector('.mobile-menu');//Seleccionamos menu de mobile

menuEmail.addEventListener('click', toggleDesktopMenu);//Escuchamos evento clic cuando damos clic sobre email parte derecha
menuHamIcon.addEventListener('click', toggleMobileMenu);//Escuchamos evento cuando damos clic al boton hamburguesa

function toggleDesktopMenu(){//FUncion que activa y desactiva el menu desktop
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){//FUncion que activa y desactiva el menu mobile
    mobileMenu.classList.toggle('inactive');
}