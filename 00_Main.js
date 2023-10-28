const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click',toggleDesktopMenu); /*A la variable menuEmail en el evento de darle click, mandamos a llamar a la funcion 
                                                        toggleDesktopMenu*/
        
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive'); //classList.toggle lo que hara es poner la clase dependiendo si ya la tiene o no.
}

