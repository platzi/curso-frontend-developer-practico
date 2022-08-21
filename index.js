//Elementos : HTML

let email = document.querySelector(".navbar-email");
let menu = document.querySelector(".desktop-menu");
let mobile_menu = document.querySelector(".mobile-menu");
let menu_hamb = document.querySelector(".menu");
let close_detalles = document.querySelector(".Close_detalles");
let Detalles_Producto = document.querySelector(".Detalles_Producto");

let icono_carrito = document.querySelector(".navbar-shopping-cart");
let aside = document.querySelector(".product-detail");
let contenedor_template = document.querySelector(".cards-container");


//Eventos

//evento para mostrar el email
email.addEventListener("click", () => {
    menu.classList.toggle("oculta");

    if (!aside.classList.contains('oculta')) {
        aside.classList.add('oculta')
    }

    if (!Detalles_Producto.classList.contains('oculta')) {
        Detalles_Producto.classList.add('oculta');

    }
});
//Evento para mostrar el menu mobile
menu_hamb.addEventListener("click", () => {
    mobile_menu.classList.toggle("oculta");
    if (!aside.classList.contains('oculta')) {
        aside.classList.add('oculta')
    }

    if (!contenedor_template.classList.contains('oculta')) {
        contenedor_template.classList.add('oculta');
    } else {
        contenedor_template.classList.remove('oculta');
    }

    if (!Detalles_Producto.classList.contains('oculta')) {
        Detalles_Producto.classList.add('oculta');

    }

});
//Evento para mostrar el carrito de compras
icono_carrito.addEventListener("click", () => {
    aside.classList.toggle("oculta");
    if (!mobile_menu.classList.contains('oculta')) {
        mobile_menu.classList.add('oculta')
    }

    if (!menu.classList.contains('oculta')) {
        menu.classList.add('oculta')
    }

    if (!Detalles_Producto.classList.contains('oculta')) {
        Detalles_Producto.classList.add('oculta');

    }

});


//Evento para mostrar los detalles de un prodcuto al clickearlo




//creando un arreglo de template
let Lista_articulos = [];
//agregando manual algunos articulos

Lista_articulos.push({
    imagen: "/image/Queso.png",
    nombre: "Pizza de Queso",
    precio: 230,
    id: "Comida",
    descripcion: "Con el queso y con el sexo nunca existe el exceso"

});
Lista_articulos.push({
    imagen: "/image/Jamon.png",
    nombre: "Pizza de Jamon",
    precio: 230,
    id: "Comida",
    descripcion: "Que rico es el Jamon  Y si Es de Cerdo Mogollon"

});
Lista_articulos.push({
    imagen: "/image/Vejetales.png",
    nombre: "Pizza de Vejetales",
    precio: 200,
    id: "Comida",
    descripcion: "Los Vejetales Son para Tontos , Si le hechas Vejetal a una Pizza, Tu Madre Trabaja en Colombia"

});
Lista_articulos.push({
    imagen: "/image/Limonada.png",
    nombre: "Limonada",
    precio: 20,
    id: "Bebida",
    descripcion: "La Limonada surgio cuando una hada se metio un limon por el trasero"

});



function template(arr) {


    arr.forEach(iterator => {


        let imagen_item = iterator.imagen;
        let nombre_item = iterator.nombre;
        let precio_item = iterator.precio;
        let id_item = iterator.precio;
        let descripcion_item = iterator.descripcion;




        //Creando un template de un articulo con  las propiedades   de este 

        let t_tarjeta = document.createElement('div')
        t_tarjeta.classList.add('product-card');


        let t_img = document.createElement('img');
        t_img.setAttribute("src", imagen_item);
        t_img.addEventListener('click', () => { detalles(iterator) });

        let hr = document.createElement('hr');

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
        t_tarjeta.append(hr);
        t_tarjeta.append(product_div);

        contenedor_template.append(t_tarjeta);



    })
}
template(Lista_articulos);


function filtrado(id) {
    let articulos_filtrados = Lista_articulos.filter((item) => {
        return item.id == id;
    });
    contenedor_template.innerHTML = "";
    template(articulos_filtrados);

    if (id == 'Todos') {
        contenedor_template.innerHTML = "";
        template(Lista_articulos);
    }
}




function detalles(iterator) {
    if (!aside.classList.contains('oculta') || !menu.classList.contains('oculta')) {
        aside.classList.add('oculta');
        menu.classList.add('oculta');


    }

    if (Detalles_Producto.classList.contains('oculta')) {
        Detalles_Producto.classList.remove('oculta');

        let detalles_img = document.querySelector(".Detalles_Producto_img");
        let detalles_nombre = document.querySelector(".Detalles_Producto_nombre");
        let detalles_precio = document.querySelector(".Detalles_Producto_precio");
        let detalles_desc = document.querySelector(".Detalles_Producto_descripcion");


        detalles_img.setAttribute("src", iterator.imagen);
        detalles_nombre.innerHTML = iterator.nombre;
        detalles_precio.innerHTML = iterator.precio;
        detalles_desc.innerHTML = iterator.descripcion;



    } else {
        // continuaa..
    }


}

//Evento para cerrar el aside de detalles de producto
close_detalles.addEventListener("click", () => {
    Detalles_Producto.classList.add('oculta');
    // if (contenedor_template.classList.contains('oculta')) {
    //     contenedor_template.classList.remove('oculta');
    // }

})