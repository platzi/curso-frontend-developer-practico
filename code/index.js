
import '@estilos/styles.css';
// rm -rf dist && npm run build



import bt_add_to_cart from '@icons/carrito-de-compras.png'
import icon_close from '@icons/icon_close.png'
import icon_menu from '@icons/icon_menu.svg'
import icon_shopping_cart from '@icons/bolsa-de-la-compra.png'
import flechita from '@icons/flechita.svg'
import closeDetail from '@icons/icon_close.png'
import AddCart from '@icons/carrito-de-compras.png'
// import icono from '@icons/favicon.ico'

import bolsa1 from '/images/bolsa1.jpg'
import bolsa2 from '/images/bolsa2.jpg'
import bolsa3 from '/images/bolsa3.jpg'
import bolsa4 from '/images/bolsa4.jpg'
import bolsa5 from '/images/bolsa5.jpg'
import bolsa6 from '/images/bolsa6.jpg'
import bolsa7 from '/images/bolsa7.jpg'
import bolsa8 from '/images/bolsa8.jpg'
import bolsa9 from '/images/bolsa9.jpg'
import bolsa10 from '/images/bolsa10.jpg'
import bolsa11 from '/images/bolsa11.jpg'
import bolsa12 from '/images/bolsa12.jpg'
import bolsa13 from '/images/bolsa13.jpg'
import bolsa14 from '/images/bolsa14.jpg'
import bolsa15 from '/images/bolsa15.jpg'

import bolsa16 from '/images/bolsa16.jpg'
import bolsa17 from '/images/bolsa17.jpg'
import bolsa18 from '/images/bolsa18.jpg'
import bolsa19 from '/images/bolsa19.jpg'
import bolsa20 from '/images/bolsa20.jpg'
import bolsa21 from '/images/bolsa21.jpg'
import bolsa22 from '/images/bolsa22.jpg'
// import bolsa221 from '/images/bolsa221.jpg'
import bolsa23 from '/images/bolsa23.jpg'
import bolsa24 from '/images/bolsa24.jpg'
import bolsa25 from '/images/bolsa25.jpg'
import bolsa26 from '/images/bolsa26.jpg'
import bolsa27 from '/images/bolsa27.jpg'
import bolsa28 from '/images/bolsa28.jpg'
import bolsa29 from '/images/bolsa29.jpg'
import bolsa30 from '/images/bolsa30.jpg'
import bolsa31 from '/images/bolsa31.jpg'
import bolsa32 from '/images/bolsa32.jpg'
import bolsa33 from '/images/bolsa33.jpg'
import bolsa34 from '/images/bolsa34.jpg'
import bolsa35 from '/images/bolsa35.jpg'
import bolsa36 from '/images/bolsa36.jpg'
import bolsa37 from '/images/bolsa37.jpg'
import bolsa38 from '/images/bolsa38.jpg'
import bolsa39 from '/images/bolsa39.jpg'
import bolsa40 from '/images/bolsa40.jpg'
import bolsa41 from '/images/bolsa41.jpg'
import bolsa42 from '/images/bolsa42.jpg'
import bolsa43 from '/images/bolsa43.jpg'
import bolsa44 from '/images/bolsa44.jpg'
import bolsa45 from '/images/bolsa45.jpg'
import bolsa46 from '/images/bolsa46.jpg'
import bolsa47 from '/images/bolsa47.jpg'
import bolsa48 from '/images/bolsa48.jpg'
import bolsa49 from '/images/bolsa49.jpg'
import bolsa50 from '/images/bolsa50.jpg'
import bolsa51 from '/images/bolsa51.jpg'
import bolsa52 from '/images/bolsa52.jpg'
import bolsa53 from '/images/bolsa53.jpg'
import bolsa54 from '/images/bolsa54.jpg'
import bolsa55 from '/images/bolsa55.jpg'
import bolsa56 from '/images/bolsa56.jpg'
import bolsa57 from '/images/bolsa57.jpg'
import bolsa58 from '/images/bolsa58.jpg'




// import logo_yard_sale from '@logos/logo_yard_sale.svg'
const imgMenu = document.querySelector(".menu")
// const imgLogo = document.querySelector(".logo")
const imgCartshop = document.querySelector(".cart-shop")
const imgArrow = document.querySelector(".arrowImg")
const imgClose = document.querySelector(".imgClose")
const imgAddCart = document.querySelector(".imgAddCart")
// const  icon = document.querySelector(".favicon")

imgMenu.src = `${icon_menu}`;
// imgLogo.src = `${logo_yard_sale}`;
imgCartshop.src = `${icon_shopping_cart}`;
imgArrow.src = `${flechita}`;
imgClose.src = `${closeDetail}`;
imgAddCart.src = `${AddCart}`;
// icon.src = `${icono}`;





const menuEmail = document.querySelector(".navbar-email")
const DesktopMenu = document.querySelector(".desktop-menu")

const MenuBurger = document.querySelector(".menuBurger")
const mobileMenu = document.querySelector(".mobile-menu")

const menuCarrito = document.querySelector(".navbar-shopping-cart")
const menuMyorder = document.querySelector("#shoppingCartContainer")

const cardsContainer = document.querySelector(".cards-container")

const detalles = document.querySelector("#productDetail")
const detallesPicture = document.querySelector(".cards-container")
const cerrardetalles = document.querySelector(".close")



const imagenDetalle = document.querySelector("#imageDetalle")
const precioDetalle = document.querySelector("#precio")
const nameDetalle = document.querySelector("#nameProduct")
const DetalleInfo = document.querySelector("#detalleInfo")

const addCar = document.querySelector('#botonCarrito');


const pagarW = document.querySelector(".primary-button")


menuEmail.addEventListener('click', correoMenu)
function correoMenu() {
    DesktopMenu.classList.toggle('inactive')
    detalles.classList.add('inactive')
    menuMyorder.classList.add("inactive")
}

MenuBurger.addEventListener("click", toogleMobile)
function toogleMobile() {
    mobileMenu.classList.toggle("inactive")
    menuMyorder.classList.add("inactive");
    detalles.classList.add('inactive')
}

menuCarrito.addEventListener('click', toogleMyOrder)
function toogleMyOrder() {
    menuMyorder.classList.toggle("inactive")
    mobileMenu.classList.add("inactive")
    detalles.classList.add('inactive')
    DesktopMenu.classList.add('inactive')
}
const productList = [];


productList.push(
    // {
    //    name: "Mochila infantil Hello Kitty ",
    //    price: 200,
    //    image: bolsa1,
    //    info: "mochila de Hello Kitty 3 en 1",
    //    code: "KFA001"
    //},
    //{
    //  name: "Mochila infantil Frozen",
    // price: 200,
    // image: bolsa2,
    //  info: "mochila de frozen cuenta con su correa para su transporte 3 en 1",
    //  code: "KFA002"
    //},
    // {
    //     name: "Mochila infantil Moana",
    //     price: 200,
    //     image: bolsa3,
    //     info: "mochila de Moana cuenta con su correa para su transporte 3 en 1",
    //     code: "KFA003"
    // },
    // {
    //     name: "Mochila infantil Lilo",
    //     price: 200,
    //     image: bolsa4,
    //     info: "mochila de Moana cuenta con su correa para su transporte 3 en 1",
    //     code: "KFA004"
    // },
    //{
    //  name: "Mochila infantil Miraculous",
    //  price: 200,
    //  image: bolsa5,
    //  info: "mochila de Miraculous cuenta con su correa para su transporte 3 en 1",
    //  code: "KFA005"
    //},
    // {
    //     name: "Mochila infantil mickey mouse",
    //     price: 200,
    //     image: bolsa6,
    //     info: "mochila de mickey mouse cuenta con su correa para su transporte 3 en 1",
    //     code: "KFA006"
    // },
    // {
    //     name: "Bolso juvenil 3 en 1 celeste/amarilla",
    //     price: 200,
    //     image: bolsa7,
    //     info: "Bolso con su correa para hacerse mochila estampado estrellas plateadas.",
    //     code: "KFA021"
    // },
    // {
    //     name: "Bolso juvenil 3 en 1 color rosa",
    //     price: 200,
    //     image: bolsa8,
    //     info: "Bolso con su correa para hacerse mochila color rosa",
    //     code: "KFA022"
    // },
    // {
    //     name: "Bolso juvenil 3 en 1 estampado Myckey",
    //     price: 200,
    //     image: bolsa9,
    //     info: "Bolso con su correa para hacerse mochila color cafe con estampado de Myckey mouse",
    //     code: "KFA023"
    // },
    // {
    //     name: "Bolso juvenil 3 en 1  Azul estampado",
    //     price: 200,
    //     image: bolsa10,
    //     info: "Bolso Color azul rey con combinaciones amarillas y estampado de estrellas plateadas con su correa para hacerse mochila ",
    //     code: "KFA024"
    // },

    // {
    //     name: "Bolsa chica Rosa Palo",
    //     price: 150,
    //     image: bolsa11,
    //     info: "Bolso color rosa Palo con su hermosa correa para que lo lleves a todas partes con medidas de 20cm de largo x 24cm de ancho",
    //     code: "KFA041"
    // },

    // //    {
    // //        name: "Bolsa chica Cafe",
    // //        price: 150,
    // //        image: bolsa12,
    // //        info: "Bolso color cafe con su hermosa correa para que lo lleves a todas partes con medidas de largo 20cm x 24cm de ancho",
    // //        code: "KFA042"
    // //    },

    // {
    //     name: "Bolsa chica Verde / Menta",
    //     price: 150,
    //     image: bolsa13,
    //     info: "Bolso color Verde / menta con su hermosa correa para que lo lleves a todas partes con medidas de largo 20cm x 24cm de ancho",
    //     code: "KFA043"
    // },
    // {
    //     name: "Bolsa chica Rosa",
    //     price: 150,
    //     image: bolsa14,
    //     info: "Bolso color Rosa con su hermosa correa para que lo lleves a todas partes con medidas de largo 20cm x 24cm de ancho",
    //     code: "KFA044"
    // },

    {
        name: "Bolsa chica Azul Marino",
        price: 150,
        image: bolsa15,
        info: "Bolso color Azul Marino con su hermosa correa para que lo lleves a todas partes con medidas de largo 20cm x 24cm de ancho",
        code: "KFA045"
    },

    // {
    //     name: "Bolsa mediana para dama Azul",
    //     price: 200,
    //     image: bolsa16,
    //     info: "Bolsa para hermosa damas tamaño mediano.",
    //     code: "KFA061"
    // },
    // {
    //     name: "Bolsa mediana para dama Lila",
    //     price: 200,
    //     image: bolsa17,
    //     info: "Bolsa con hermoso Color lila tamaño mediano.",
    //     code: "KFA062"
    // },
    // {
    //     name: "Bolsa mediana para dama Celeste ",
    //     price: 200,
    //     image: bolsa18,
    //     info: "Bolsa con lineas de colores negra y blanca.",
    //     code: "KFA063"
    // },
    // {
    //     name: "Bolsa mediana para dama Amarrilla ",
    //     price: 200,
    //     image: bolsa19,
    //     info: "Bolsa con lineas de color Azul y rosa.",
    //     code: "KFA064"
    // },
    // {
    //     name: "Bolsa Mediana para dama Mostaza",
    //     price: 200,
    //     image: bolsa22,
    //     info: "Bolsa con color hermoso color Moztaza con su correa para mejor comodidad.",
    //     code: "KFA067"
    // },
    // {
    //     name: "Bolso Mediano Color Negro",
    //     price: 200,
    //     image: bolsa25,
    //     info: "Bolsa con color hermoso color Negro con su correa para mejor comodidad.",
    //     code: "KFA068"
    // },


    //{
    //name: "Bolsa MaxiBolsa para dama negro/blanco/rojo",
    // price: 200,
    //  image: bolsa20,
    //   info: "Bolsa con 3 colores precioso, con un tamaño un poco mayor alas demas para que lleves todas tus cosas.",
    //    code: "KFA065"
    //  },

    {
        name: "Bolsa MaxiBolsa para dama Vino",
        price: 200,
        image: bolsa21,
        info: "Bolsa con color vino y linea blanca con cafe, con un tamaño un poco mayor alas demas para que lleves todas tus cosas.",
        code: "KFA066"
    },
    //  {
    //    name: "Mochila Juvenil 3 en 1 color Cafe",
    //  price: 200,
    //  image: bolsa221,
    //  info: "Bolsa con color hermoso color Moztaza con su correa para mejor comodidad.",
    //  code: "KFA023"
    //},
    // {
    //     name: "Mochila Juvenil 3 en 1 color Azul marino",
    //     price: 200,
    //     image: bolsa23,
    //     info: "Bolsa con color hermoso color marino con su correa para mejor comodidad.",
    //     code: "KFA025"
    // },

    // {
    //     name: "Bolso chico Color Negro",
    //     price: 200,
    //     image: bolsa24,
    //     info: "Bolsa con color hermoso color Negro con su correa para mejor comodidad, de material rigido estilo maletin.",
    //     code: "KFA046"
    // },
    {
        name: "Bolso estilo Bordado Azul Marino",
        price: 200,
        image: bolsa26,
        info: "Bolsa con color hermoso color Negro y su estilo bordado para resaltar.",
        code: "KFA081"
    },

    // {
    //     name: "Bolso estilo Bordado Rosa/Negro",
    //     price: 200,
    //     image: bolsa27,
    //     info: "Bolsa con color hermoso color Rosa y negro y su estilo bordado.",
    //     code: "KFA082"
    // },
    // {
    //     name: "Bolsa bordada con flores color cafe",
    //     price: 200,
    //     image: bolsa28,
    //     info: "Bolsa con color cafe y su hermoso estilo de flores para este hermoso verano.",
    //     code: "KFA083"
    // },
    // {
    //     name: "Bolsa bordada roja con flores de colores",
    //     price: 200,
    //     image: bolsa29,
    //     info: "Bolsa con color roja y su hermoso estilo de flores de variado colores para combinar con todo los estilos de ropa.",
    //     code: "KFA084"
    // },
    {
        name: "Bolsa chica Negra con correa ",
        price: 180,
        image: bolsa30,
        info: "Bolsa negra de mano con correa auto ajustable dependiendo del uso que le des.",
        code: "AK001"
    },
    {
        name: "Bolsa chica beige con correa ",
        price: 180,
        image: bolsa31,
        info: "Bolsa beige de mano con correa auto ajustable dependiendo del uso que le des.",
        code: "AK002"
    },
    {
        name: "Bolsa chica cafe con estampado con correa ",
        price: 140,
        image: bolsa32,
        info: "Bolsa cafe de mano con correa auto ajustable dependiendo del uso que le des.",
        code: "AK003"
    },
    {
        name: "Bolsa chica color moztaza/cafe con estampado con correa ",
        price: 140,
        image: bolsa33,
        info: "Bolsa cafe de mano con correa auto ajustable dependiendo del uso que le des.",
        code: "AK004"
    },
    {
        name: "Bolsa chica rosa palo con estampado con su correa",
        price: 140,
        image: bolsa34,
        info: "Bolsa chica rosa palo de mano con correa auto ajustable dependiendo del uso que le des.",
        code: "AK005"
    },
    {
        name: "Bolsa chica azul y rosa con estampado rayas",
        price: 160,
        image: bolsa35,
        info: "Bolsa chica azul y rosa de mano con correa auto ajustable dependiendo del uso que le des.",
        code: "AK006"
    },
    {
        name: "Bolsa chica gris con estampado rayas",
        price: 160,
        image: bolsa36,
        info: "Bolsa chica gris con correa auto ajustable dependiendo del uso que le des.",
        code: "AK007"
    },
    {
        name: "Bolsa chica cafe con estampado rayas",
        price: 160,
        image: bolsa37,
        info: "Bolsa chica gris con correa auto ajustable dependiendo del uso que le des.",
        code: "AK008"
    },
    {
        name: "Mochila rosa con estampado unicornio",
        price: 180,
        image: bolsa38,
        info: "Mochila Bolsa rosa con estampado unicornio estilo mochila y bolso",
        code: "AK009"
    },
    {
        name: "Mochila rosa con estampado niña bonita",
        price: 180,
        image: bolsa39,
        info: "Mochila Bolsa rosa con estampado unicornio estilo mochila y bolso",
        code: "AK010"
    },
    {
        name: "Bolsa chica color blanca",
        price: 150,
        image: bolsa40,
        info: "Bolsa chica color blanca",
        code: "AK011"
    },
    {
        name: "Bolsa chica color negra ",
        price: 150,
        image: bolsa41,
        info: "Bolsa chica color negra",
        code: "AK012"
    },
    {
        name: "Bolsa chica color rosa palo ",
        price: 150,
        image: bolsa42,
        info: "Bolsa chica color rosa palo",
        code: "AK013"
    },
    {
        name: "Bolsa chica gris",
        price: 160,
        image: bolsa43,
        info: "Bolsa chica color gris",
        code: "AK014"
    },
    {
        name: "Bolsa color cafe",
        price: 160,
        image: bolsa44,
        info: "Bolsa color cafe",
        code: "AK015"
    },
    {
        name: "Combo mochila azul",
        price: 200,
        image: bolsa45,
        info: "Mochila color azul incluida lapicera.",
        code: "AK016"
    },



    // {
    //     name: "Bolsa color amarilla con su correa",
    //     price: 200,
    //     image: bolsa46,
    //     info: "Bolsa color amarilla con su correa para que se ajuste a su comodidad.",
    //     code: "AK017"
    // },
    {
        name: "Bolsa grande color cafe",
        price: 200,
        image: bolsa47,
        info: "Bolsa grande color cafe.",
        code: "AK018"
    },
    {
        name: "Bolsa grande color azul ",
        price: 200,
        image: bolsa48,
        info: "Bolsa grande color azul.",
        code: "AK019"
    },
    {
        name: "Bolsa grande color cafe con textura y estampado",
        price: 200,
        image: bolsa49,
        info: "Bolsa grande color cafe con textura y estampado y su correa",
        code: "AK020"
    },
    {
        name: "Bolsa grande color verde menta con blanco",
        price: 200,
        image: bolsa50,
        info: "Bolsa color color verde menta con blanco.",
        code: "AK021"
    },
    {
        name: "Bolsa grande color blanca con estampado girasol",
        price: 200,
        image: bolsa51,
        info: "Bolsa color blanca con estampado girasol y su correa.",
        code: "AK022"
    },
    {
        name: "Bolsa grande color dorada con estampado flores",
        price: 200,
        image: bolsa52,
        info: "Bolsa color dorada con estampado flores.",
        code: "AK023"
    },
    {
        name: "Bolsa grande color blanca con negro y cafe",
        price: 200,
        image: bolsa53,
        info: "Bolsa  color blanca con negro y cafe y su correa en color negro.",
        code: "AK024"
    },
    {
        name: "Bolsa grande color azul con correa",
        price: 200,
        image: bolsa54,
        info: "Bolsa color azul incluida correa para poder transportarlo mejor.",
        code: "AK025"
    },
    {
        name: "Bolsa grande color cafe con correa",
        price: 200,
        image: bolsa55,
        info: "Bolsa color cafe incluida correa.",
        code: "AK026"
    },
    {
        name: "Bolsa grande color celeste con correa",
        price: 200,
        image: bolsa56,
        info: "Bolsa color celeste incluida correa.",
        code: "AK027"
    },
    {
        name: "Bolsa grande color lila con correa",
        price: 200,
        image: bolsa57,
        info: "Bolsa color lila incluida correa.",
        code: "AK028"
    },
    {
        name: "Bolsa mochila color cafe con correa",
        price: 200,
        image: bolsa58,
        info: "Bolsa color cafe incluida correa.",
        code: "AK029"
    }


);








// renderProducts(productList);
renderizar(productList);

//--------------------------------------

let productoAgregado = []

function renderizar(productList) {

    for (const product of productList) {
        let divproductCard = document.createElement('div')
        let imgproductcard = document.createElement('img')
        let divproductinfo = document.createElement('div')
        let divdivproductinfo = document.createElement('div')
        let pprice = document.createElement('p')
        let pname = document.createElement('p')
        let figureproductinfo = document.createElement('figure')
        let imgproductinfo = document.createElement('img')
        divproductCard.classList.add('product-card')
        imgproductcard.setAttribute('src', product.image)
        divproductinfo.classList.add('product-info')
        pprice.innerText = `$ ${product.price}`
        pname.innerText = product.name
        imgproductinfo.setAttribute('src', `${bt_add_to_cart}`)

        figureproductinfo.appendChild(imgproductinfo)
        divdivproductinfo.appendChild(pprice)
        console.log(pprice);
        divdivproductinfo.appendChild(pname)

        divproductinfo.appendChild(divdivproductinfo)
        divproductinfo.appendChild(figureproductinfo)

        divproductCard.appendChild(imgproductcard)
        divproductCard.appendChild(divproductinfo)

        cardsContainer.appendChild(divproductCard)

        imgproductcard.addEventListener('click', function () {
            mostrarInfoProduct(product.image, product.price, product.name, product.info)
            openProductDetail()
            // detalles.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Obtener la posición superior del detalle del producto
            const detalleOffset = detalles.offsetTop;

            // Desplazarse a la posición del detalle del producto con desplazamiento suave
            window.scrollTo({ top: detalleOffset, behavior: 'smooth' });


            // console.log(
            //     "name es ", product.name,
            //     "\n precio es ", product.price,
            //     "\n info es ", product.info,
            //     "\n imagen es ", product.image
            // );


        });

        imgproductinfo.addEventListener('click', function () {

            let productoAgregado = []

            productoAgregado.push({
                name: product.name,
                price: product.price,
                descripcion: product.info,
                image: product.image

            })
            // agregarCarrito(productoAgregado)
            console.log(productoAgregado);
            agregarCarrito(productoAgregado);


        })



    }

}


function imprimir(productoAgregado) {
    // console.log(productoAgregado);
}

let productoACarrito = []

let buttonInfo = document.querySelector('.add-to-cart-button')

buttonInfo.addEventListener('click', butonClick)
function butonClick() {
    agregarCarrito(productoACarrito)
}

function openProductDetail() {
    cerrardetalles.addEventListener("click", cerrar);
    detalles.classList.remove('inactive')
    menuMyorder.classList.add("inactive");
}

function mostrarInfoProduct(imagen, precio, nombre, info) {

    //cambia la imagen
    imagenDetalle.src = imagen
    precioDetalle.innerHTML = `$ ${precio}`
    nameDetalle.innerHTML = nombre
    DetalleInfo.innerHTML = info

    productoACarrito = []

    productoACarrito.push({
        name: nombre,
        price: precio,
        image: imagen
    })

}

let iconShopping = document.querySelector('.navbar-shopping-cart');
let countCarrito = document.querySelector('.navbar-shopping-cart div')
let myordercontentContainer = document.querySelector('.my-order-content')
let totalCarrito = document.querySelector('.total')

let productosEnCarrito = []

let result = [];

function verificarProducto(nameProduct) {
    return productosEnCarrito.some(function (articulo) {
        return articulo === nameProduct
    })
}

function agregarCarrito(producto) {

    /* Creacion de elemtentos HTML */
    let divShoppingCart = document.createElement('div')
    let figureShoppingCart = document.createElement('figure')
    let imgfigureShoppingCart = document.createElement('img')
    let pnameShoppingCart = document.createElement('p')
    let ppriceShoppingCart = document.createElement('p')
    let imgcloseShoppingCart = document.createElement('img')


    /* Se agrega contenido a cada uno de los elementos */
    divShoppingCart.classList.add('shopping-cart')
    imgfigureShoppingCart.setAttribute('src', producto[0].image)
    pnameShoppingCart.innerText = producto[0].name
    ppriceShoppingCart.innerText = '$' + producto[0].price
    imgcloseShoppingCart.setAttribute('src', `${icon_close}`)
    imgcloseShoppingCart.classList.add('removeList')

    /* Se insertan los documentos */
    figureShoppingCart.appendChild(imgfigureShoppingCart)
    divShoppingCart.appendChild(figureShoppingCart)
    divShoppingCart.appendChild(pnameShoppingCart)
    divShoppingCart.appendChild(ppriceShoppingCart)
    divShoppingCart.appendChild(imgcloseShoppingCart)
    myordercontentContainer.appendChild(divShoppingCart)


    /* Se agregan la cantidad de productos ademas de la suma de precios */
    countCarrito.innerText = document.querySelectorAll('.shopping-cart').length
    totalCarrito.innerText = '$' + (Number(totalCarrito.innerText.substring(1)) + Number(producto[0].price))
    productosEnCarrito.push(producto[0].name)
    console.log("los productos en carro: ", productosEnCarrito);

    // }


    /* Funcion para quitar productos del carrito */
    imgcloseShoppingCart.addEventListener('click', function () {
        divShoppingCart.remove()
        countCarrito.innerText = document.querySelectorAll('.shopping-cart').length
        totalCarrito.innerText = '$' + (Number(totalCarrito.innerText.substring(1)) - Number(producto[0].price))
        productosEnCarrito.splice(productosEnCarrito.indexOf(producto[0].name), 1)

        console.log("los productos en carro: ", productosEnCarrito);

    })


    pagarW.addEventListener('click', function () {
        const result = [];

        productosEnCarrito.forEach((item) => {
            const product = productList.find((p) => p.name === item);
            if (product) {
                result.push(product);
            }
        });

        console.log("el resultado que va:  \n", result);

        sendWhatsappMessage(result);

    })

}





// ------------------------------------------------------------------------------------
// const cardsContainer = document.querySelector(".cards-container");
function cerrar() {
    detalles.classList.toggle('inactive')
    // cerrardetalles.toggle('inactive')
    menuMyorder.classList.add("inactive");
    // console.log(product.image);

}



function sendWhatsappMessage(productosEnCarr) {
    // Número de teléfono y mensaje que se quiere enviar
    const phoneNumber = '9621860689';
    let url = '';

    let name = "";
    let info = "";
    let price = 1;
    let image = "";
    let codigo = "";

    let message = `Me interesaron estos artículos \n`;

    for (let i = 0; i < productosEnCarr.length; i++) {
        codigo = productosEnCarr[i].code;
        name = productosEnCarr[i].name;
        info = productosEnCarr[i].info;
        price = productosEnCarr[i].price;
        image = productosEnCarr[i].image;

        console.log("Me interesó el artículo: ", name,
            "\n precio", price,
            "código tester ", codigo);

        message += `Nombre: ${productosEnCarr[i].name}\n`;
        message += `Precio: ${productosEnCarr[i].price}\n`;
        message += `Código: ${productosEnCarr[i].code}\n\n`;
    }

    console.log(message);

    const userAgent = navigator.userAgent.toLowerCase();

    if (/mobile|iphone|ipod|ipad|android|blackberry|iemobile|wpdesktop/i.test(userAgent)) {
        url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        console.log("El usuario está navegando en un dispositivo móvil");

    } else {
        console.log("El usuario está navegando en una computadora");

        url = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    }

    // Se abre la URL en una nueva ventana
    window.open(url);
}
