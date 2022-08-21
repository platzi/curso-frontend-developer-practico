//Elementos : HTML

let email = document.querySelector(".navbar-email");
let menu = document.querySelector(".desktop-menu");
let mobile_menu = document.querySelector(".mobile-menu");
let menu_hamb = document.querySelector(".menu");

let icono_carrito = document.querySelector(".navbar-shopping-cart");
let aside = document.querySelector(".product-detail");
let contenedor_template = document.querySelector(".cards-container");


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

    if (!contenedor_template.classList.contains('oculta')) {
        contenedor_template.classList.add('oculta');
    } else {
        contenedor_template.classList.remove('oculta');
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
    precio: 180,
    id: "food"

});
Lista_articulos.push({
    imagen: "/image/depositphotos_6339600-stock-photo-italian-pizza.png",
    nombre: "Pizza de Jamon",
    precio: 230,
    id: "food"

});
Lista_articulos.push({
    imagen: "/image/depositphotos_6339600-stock-photo-italian-pizza.png",
    nombre: "Pizza de Vejetales",
    precio: 200,
    id: "food"

});
Lista_articulos.push({
    imagen: "/image/depositphotos_6339600-stock-photo-italian-pizza.png",
    nombre: "Limonada",
    precio: 20,
    id: "drinks"

});

function template(arr) {


    for (const iterator of arr) {
        let imagen_item = iterator.imagen;
        let nombre_item = iterator.nombre;
        let precio_item = iterator.precio;
        let id_item = iterator.precio;




        //Creando un template de un articulo con  las propiedades   de este 

        let t_tarjeta = document.createElement('div')
        t_tarjeta.classList.add('product-card');

        let t_img = document.createElement('img');
        t_img.setAttribute("src", imagen_item);

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



    }

}

template(Lista_articulos);


function filtrado(id) {
    let articulos_filtrados = Lista_articulos.filter((item) => {
        return item.id == id;
    });
    contenedor_template.innerHTML = "";
    template(articulos_filtrados);

    if (id == 'all') {
        contenedor_template.innerHTML = "";
        template(Lista_articulos);
    }
}



// const options = {
//     method: 'GET',
//     url: 'https://burgers1.p.rapidapi.com/burgers',
//     headers: {
//         'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//         'X-RapidAPI-Host': 'burgers1.p.rapidapi.com'
//     }
// };

// axios.request(options).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// });