# Resumenes del proyecto
Este archivo tratará de puntos importantes a mi parecer del proyecto trabajado.

## Fusión del menú en desktop (18)

- **HTML: ** En el index.html agregamos la clase 'inactive' al 'desktop-menu'.

- **CSS:** En el styles.css al 'navbar-email' le sumamos la linea 'cursor: pointer', la cual sirve para al momento de uno poner el cursor frente al elemento navbar-email, este se ponga con la manita tipica de la manita. También se agrego otro selector llamado '.inactive' la cual viene del creado en index.html, entre las llaves del mismo se coloco 'display: none', permitiendo que el navbar-email desaparezca de la pantalla.

- **JavaScript:** respecto al main.js, se crearon 2 constantes que fueron seleccionadas mediante sus clases, posteriormente mediante la constante del navbar-email y el '.addEventListener()' conseguí determinar que el evento a usar para el email seria el click y que de hacerlo la funcion a ejecutar seria 'toggleDesktopMenu' la cual cree posteriormente, en la misma utilice la constante DesktopMenu la cual fue seleccionada anteriormente con la clase 'desktop-menu', pero en la linea de código para mi funcion utilice '.classList' seguido del nombre de la constante para indicar que trabajaria con las clases del elemento, seguido coloque '.toggle()', el mismo se encarga de analizar el texto colocado dentro de sus parentesis, si encuentra esa clase dentro de nuestro elemento, lo elimina (remueve), pero de no encontrarla lo añade (add) por eso se le indico la clase 'inactive' que es la encargada en css de poner en none el display del menu para que al hacer click elimine la clase y por ende no sirva el display none, pero al volver a hacer click se colocaria de nuevo. Para lo anterior yo tuve 2 soluciones propias porque la anterior fue del profe, las mismas seran mostradas tras colocar la del profe.

```javascript
//Declaración de las constantes para seleccionar nuestros elementos mediante sus clases
const menuEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');

//Declaracion del evento y funcion a usar en el elemento seleccionado.
menuEmail.addEventListener('click', toggleDesktopMenu);

//Solución del profe a la funcion toggleDesktopMenu()
function toggleDesktopMenu(){
    DesktopMenu.classList.toggle('inactive');
}

//1era solución propia para la funcion toggleDesktopMenu()
 function toggleDesktopMenu(){
     if(DesktopMenu.classList.contains('inactive')){
         DesktopMenu.classList.remove('inactive');
     }else{
         DesktopMenu.classList.add('inactive');
    }
 }

//2da solución propia para la funcion toggleDesktopMenu()
 function toggleDesktopMenu(){
     DesktopMenu.classList.contains('inactive')?DesktopMenu.classList.remove('inactive') : DesktopMenu.classList.add('inactive'); 
 }
```