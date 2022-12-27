//para egregar un addEvenListener:
//1.crear las variables de las etiquetas html que vamos a estar trabajando
//2. agregar la propiedad .addEventListener a la variable contendeora de la etiqueta que corresponda y alli le agregamos  el evento que queremos hacer y la función que se llamara una vez este evento se cumpla
//creamos la función que queremos que se ejecute

const navMenu = document.querySelector(`.navbar-email`);
const desktopMenu = document.querySelector(`.desktop-menu`);


navMenu.addEventListener(`click` , toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle(`inactive`)
    //toggle nos permite activas y desactivar algo en este caso usamos classlist.toggle esto quiere decir que se activara y desactivara la clase `inactive`.
}



