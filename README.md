# Curso de frontend developer práctico

Hola! este es un fork del repositorio principal del curso de frontend developer práctico, el propósito de todo esto es mejorar mis habilidades en JavaScript junto con el curso práctico de JavaScript que he trabajado [aquí](https://github.com/UnMecaNiko/cursoPracticoJavaScript).

Haremos una unión de todos lo componentes del repo original para terminar con un producto funcional.

Lo que verás a continuación son mis notas del curso 💚

Para hacer desaparecer o aparecer un menú en una página una técnica puede ser crear una clase que se asigne o quite cada vez que se pulse el botón deseado:

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

Un punto a mejorar:
![Screenshot 2022-10-08 103607.jpg](https://static.platzi.com/media/user_upload/Screenshot%202022-10-08%20103607-35929556-c0a5-483e-ad37-c579790e5008.jpg)
Ves que la línea del nav se ve interrumpida? si te fijas comenzó a pasar desde que le pusimos un background al menu, esto se soluciona fácilmente ajustando la posición del menú en el css:
```css
.mobile-menu {
  background-color: var(--white);
  position: absolute;
  top: 61px;
  padding: 24px;
}
```