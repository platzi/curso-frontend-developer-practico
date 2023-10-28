const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')

menuEmail.addEventListener('click',toggleDesktopMenu); /*A la variable menuEmail en el evento de darle click, mandamos a llamar a la funcion 
                                                        toggleDesktopMenu*/
menuHamIcon.addEventListener('click',togglemobileMenu);
        
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive'); //classList.toggle lo que hara es poner la clase dependiendo si ya la tiene o no.
}

function togglemobileMenu(){
    mobileMenu.classList.toggle('inactive');
}
