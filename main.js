//declaramos una variable para llamar la clase a la cual el usuario le va a dar clic
const menuEmail = document.querySelector('.navbar-email');
//declaramos una variable para llamar la clase que va a aparecer cuando el usuario de clic
const desktopMenu = document.querySelector('.desktop-menu');

//con este comando, indicamos que cuando el usuario de click, aparezca o desaparezca según lo que el usuario haga
menuEmail.addEventListener('click', toggleDesktopMenu);

//pero antes debo crear la función que llamará el anterior comando, la función lo que hace es ejecutar la función classList.toggle que quita o pone la clase inactive, dependiendo de si ya la tiene o no la tiene
function toggleDesktopMenu() {
    console.log('Click');
    desktopMenu.classList.toggle('inactive');
}

console.log('JS funcionando');