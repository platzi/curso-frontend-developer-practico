# Curso Práctico de JavaScript

## C018 Fusión del menu en desktop

Se agrega todo el código del archivo clase11.html al index.html, ya que este tomaremos como base. De ese separamos la parte de los estilos y lo llevamos al archivo styles.css. 
Por lo que pudimos ver, este se trata del menu de navegacion. El cual consta de una parte izquierda y otra derecha, que se activara cuand hagamos click en algun lado.
El archivo clase7.html es lo que debe aparecer cuando hacemos click en el email, y este corresponde a la parte derecha. 
Agregamos la parte del head que no estaba en el anterior (que vincula las fuentes) al index. Tambien agregamos lo correspondiente a lo que se refiere al desktop-menu adentro de la nav-bar.
Ponemos el estilo de CSS tambien en style.css.
Para que no rompa la estructura, en el codigo de CSS agregamos en la clase del desktop-menu el `position absolute` y la posicion `top` y `right` para que se oriente en la esquina superior derecha y modificamos el color de fondo de la caja, ademas utilizamos las variables creadas:

```css
position: absolute;
top: 60px;
right: 60px;
background-color: var(--white);
```

Para hacer que este menu aparezca y desaparezca haciendo click utilizaremos una clase nueva que crearemos y con JS haremos que esta clase este o no presente en el desktop-menu.
Entonces creamos la siguiente clase en style.css, el cual con este hacemos que no se muestre si tiene esta clase:

```css
.inactive {
  display: none;
}
```

En la estructura html, le agregamos esta clase en el div del desktop-menu para que de una no se muestre el menu:

```html
<div class="desktop-menu inactive">
<div>
```

Ahora, por medio de JavaScript, hacemos que si pasa el evento de hacer click en el email, modifique la clase (quitando o agregando) inactive del div desktop-menu.

```javascript
const manuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
manuEmail.addEventListener("click", toogleDesktopMenu);

function toogleDesktopMenu(){
  desktopMenu.classList.toggle("inactive");
}
```

Por último se modifica el CSS para que al pasar el cursor por el email, este cambie de formato y se pueda distinguir que se puede hacer click. Para esto en la clase para ese item le agregamos:

```css
cursor: pointer;
```

