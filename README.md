# Curso de frontend developer práctico

Hola! este es un fork del repositorio principal del curso de frontend developer práctico, el propósito de todo esto es mejorar mis habilidades en JavaScript junto con el curso práctico de JavaScript que he trabajado [aquí](https://github.com/UnMecaNiko/cursoPracticoJavaScript).

Haremos una unión de todos lo componentes del repo original para terminar con un producto funcional.

Lo que verás a continuación son mis notas del curso 💚

Para hacer desaparecer o aparcer un menú en una página una técnica puede ser crear una clase que se asigne o quite cada vez que se pulse el botón deseado:

```css
/*css*/
.inactive{
        display: none;
      }
```
```js
//JS
menuEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}
````

🚀 [(Comentario)](https://platzi.com/comentario/4166440/) Para que la interacción con el menú hamburguesa quede mucho mejor pueden actualizar el cursor a “pointer” en la clase menu en el archivo css: 💚

```css
.menu {
  display: none;
  cursor: pointer;
}
```

