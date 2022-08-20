//Elementos : HTML

let email = document.querySelector(".navbar-email");
let menu = document.querySelector(".desktop-menu");
let mobile_menu = document.querySelector(".mobile-menu");
let menu_hamb = document.querySelector(".menu");

let icono_carrito = document.querySelector(".navbar-shopping-cart");
let aside = document.querySelector(".product-detail");


//Eventos


email.addEventListener("click", () => {
    menu.classList.toggle("oculta");

    if (!aside.classList.contains('oculta')) {
        aside.classList.add('oculta')
    }
});

menu_hamb.addEventListener("click", () => {
    mobile_menu.classList.toggle("oculta");
    if (!aside.classList.contains('oculta')) {
        aside.classList.add('oculta')
    }
});

icono_carrito.addEventListener("click", () => {
    aside.classList.toggle("oculta");
    if (!mobile_menu.classList.contains('oculta')) {
        mobile_menu.classList.add('oculta')
    }

    if (!menu.classList.contains('oculta')) {
        menu.classList.add('oculta')
    }

});


//creando un arreglo de template
let Lista_articulos = [];
//agregando manual algunos articulos
Lista_articulos.push({
    imagen: "/image/depositphotos_6339600-stock-photo-italian-pizza.png",
    nombre: "Pizza de Queso",
    precio: 180

});
Lista_articulos.push({
    imagen: "/image/depositphotos_6339600-stock-photo-italian-pizza.png",
    nombre: "Pizza de Jamon",
    precio: 230

});
Lista_articulos.push({
    imagen: "/image/depositphotos_6339600-stock-photo-italian-pizza.png",
    nombre: "Pizza de Vejetales",
    precio: 200

});

let contenedor_template = document.querySelector(".cards-container");
for (const iterator of Lista_articulos) {
    let imagen_item = iterator.imagen;
    let nombre_item = iterator.nombre;
    let precio_item = iterator.precio;




    //Creando un template de un articulo con  las propiedades   de este 

    let t_tarjeta = document.createElement('div')
    t_tarjeta.classList.add('product-card');

    let t_img = document.createElement('img');
    t_img.setAttribute("src", imagen_item);

    let product_div = document.createElement('div');
    product_div.classList.add('product-info')

    let div_info = document.createElement('div');

    let precio_info = document.createElement('p');
    precio_info.innerHTML = '$ ' + precio_item;

    let nombre_info = document.createElement('p');
    nombre_info.innerHTML = nombre_item;

    let figure_div = document.createElement('figure')

    let img_comprar = document.createElement('img');
    img_comprar.setAttribute("src", "./icons/bt_add_to_cart.svg");


    figure_div.append(img_comprar);


    div_info.append(precio_info);
    div_info.append(nombre_info);



    product_div.append(div_info);
    product_div.append(figure_div);

    t_tarjeta.append(t_img);
    t_tarjeta.append(product_div);

    contenedor_template.append(t_tarjeta);



}

