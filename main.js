const navbarEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');

const toggleDesktopMenu = () => DesktopMenu.classList.toggle('inactive')

navbarEmail.addEventListener('click', toggleDesktopMenu);

/*
Primero, se crea una constante llamada navbarEmail que utiliza el método querySelector para buscar en el documento HTML un elemento que tenga la clase navbar-email.

Luego, se crea otra constante llamada DesktopMenu que utiliza el método querySelector para buscar en el documento HTML un elemento que tenga la clase desktop-menu.

Después, se crea una función llamada toggleDesktopMenu que simplemente utiliza el método classList.toggle() para agregar o eliminar la clase inactive del elemento DesktopMenu. Esto significa que, si el elemento DesktopMenu ya tiene la clase inactive, la función la eliminará y viceversa.

Por último, se añade un "event listener" al elemento navbarEmail. En concreto, se agrega un evento "click" que activa la función toggleDesktopMenu. Esto significa que, cuando se haga clic en el elemento navbarEmail, se activará la función toggleDesktopMenu, lo que hará que el elemento DesktopMenu cambie de tener la clase inactive a no tenerla, o viceversa.
*/