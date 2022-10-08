# Curso de frontend developer práctico

Hola! este es un fork del repositorio principal del curso de frontend developer práctico, el propósito de todo esto es mejorar mis habilidades en JavaScript junto con el curso práctico de JavaScript que he trabajado [aquí](https://github.com/UnMecaNiko/cursoPracticoJavaScript).

Haremos una unión de todos lo componentes del repo original para terminar con un producto funcional.

Lo que verás a continuación son mis notas del curso 💚

### [Deploy de la página](https://unmecaniko.github.io/curso-frontend-dev-practico-JS/)
***
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

Un punto a mejorar: <br>
![Screenshot 2022-10-08 103607.jpg](https://static.platzi.com/media/user_upload/Screenshot%202022-10-08%20103607-35929556-c0a5-483e-ad37-c579790e5008.jpg) <br>
Ves que la línea del nav se ve interrumpida? si te fijas comenzó a pasar desde que le pusimos un background al menu, esto se soluciona fácilmente ajustando la posición del menú en el css:
```css
.mobile-menu {
  background-color: var(--white);
  position: absolute;
  top: 61px;
  padding: 24px;
}
```

### For of & for in

For of devuelve el elemento de la lista que se esté iterando
For in devuelve el index del cada elemento (de 0 a n)


🚀 Si usamos `innerHTML` es más directo el proceso, pero no se recomienda hacerlo así, por razones de seguridad y buenas prácticas. 💚

Fuentes:

- [Curso de manipulación del DOM](https://platzi.com/clases/2193-dom/34860-otras-formas-de-agregar/)
- [developer.mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#:~:text=The%20innerHTML%20property%20can%20be,the%20page%20was%20initially%20loaded.)
