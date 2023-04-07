
import '../estilos/styles.css';
// import bt_add_to_cart from '../icons/bt_add_to_cart.s'

import bt_add_to_cart from '../icons/bt_add_to_cart.svg'
import icon_close from  '../icons/icon_close.png'

import icon_menu from   '../icons/icon_menu.svg'
import logo_yard_sale from '../logos/logo_yard_sale.svg'
import icon_shopping_cart from '../icons/icon_shopping_cart.svg'
import flechita from    '../icons/flechita.svg'
import closeDetail from    '../icons/icon_close.png'
import AddCart from    '../icons/bt_add_to_cart.svg'


const imgMenu     = document.querySelector(".menu")
const imgLogo     = document.querySelector(".logo")
const imgCartshop = document.querySelector(".cart-shop")
const imgArrow    = document.querySelector(".arrowImg")
const imgClose    = document.querySelector(".imgClose")
const imgAddCart    = document.querySelector(".imgAddCart")


imgMenu.src = `${icon_menu}`;
imgLogo.src = `${logo_yard_sale}`;
imgCartshop.src = `${icon_shopping_cart}`;
imgArrow.src = `${flechita}`;
imgClose.src = `${closeDetail}`;
imgAddCart.src = `${AddCart}`;





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


productList.push({
    name: "pulsera con diseño minimalista",
    price: 40,
    image: "https://i.pinimg.com/564x/77/52/08/775208fd2388787d11bf9b1d489e5b0a.jpg",
    info: "👉👉👉👉👉 CORRECCIÓN ✅✅ 🔅POR FAVOR LOS HILOS SON EL PRIMERO QUE ES DE LA MUÑECA DE 56 CM REEMPLAZARLO POR 112 CENTÍMETROSY PARA EL SEGUNDO QUE ES PARA EL",
    code: "https://pin.it/1ekzFT8"
});

productList.push({
    name: "Red Decenario Knotted Rosary Stylish Pulseras Trendy Celebrity Bracelet ",
    info: "https://www.etsy.com/listing/594948397/red-decenario-knotted-rosary-stylish?epik=dj0yJnU9TDVHdGZUczZNSkpwTDhlVU9iVTZDcGxaZUFvaFRPQmYmcD0wJm49eEczNXBkUFlVdWdUSnNKNEt4TFREdyZ0PUFBQUFBR1F2UmJn \n\n Esta pulsera rosario está hecha de cordón y tiene una cruz de macramé. Las diez Avemarías también son un diseño de macramé. Como se trata de una pulsera ajustable, es perfecta para niños, adolescentes y adultos. Está muy bien hecho y es una manera fácil de tener un rosario contigo en todo momento.",
    price: 45,
    image:
        "https://i.pinimg.com/564x/4a/f5/aa/4af5aaf23e653fcad8cb9dab212727ce.jpg",
    code: "RDKRPTC"

});

productList.push({
    info: "Collar nuevo y estetico",
    name: "Collar eco-Friendly",
    price: 30,
    image:
        "https://i.pinimg.com/564x/11/11/1d/11111dbce6164b2735c2a3ddbd58bdca.jpg",
    code: "https://pin.it/5aq5NHv"

});

productList.push({
    info: "Este hermoso collar en forma de corazón es una pieza única que seguramente llamará la atención de todos. El colgante en forma de corazón está hecho de un material de alta calidad, con un acabado suave y brillante que refleja la luz de manera espectacular.",
    name:"Collar corazon for you",
    price: 40,
    image:
        "https://i.pinimg.com/564x/94/6b/bc/946bbc13955bb8e294e86c8661a82781.jpg",
    code: "CORA123"

});

productList.push({
    info: "Collar con tematica de los vengadores",
    name: "Collar con tema de LOKI",
    price: 60,
    image:
        "https://i.pinimg.com/564x/f0/d0/6e/f0d06ef71fb66bd3e54c79073060b5f0.jpg",
    code: "LoKi12"

});

productList.push({
    info: "¡Estas pulseras serían el regalo más dulce para cualquier amante de los superhéroes! Este listado es para una pulsera. Cada pulsera está encordada dos veces a mano en un cordón elástico para garantizar la calidad y la durabilidad. ✨¿Necesitas ayuda con qué talla de pulsera elegir? Use una cinta métrica flexible o una tira de papel para envolver su muñeca. Debe quedar ajustado pero no demasiado apretado. Si usa una hoja de papel, marque el tamaño con un bolígrafo y use una regla para ver la medida. Recomiendo dimensionar hasta la media pulgada más cercana.",
    name: "pulsera para niños",
    price: 35,
    image:
        "https://i.pinimg.com/564x/4c/e4/dd/4ce4ddf1a40d2176168c6cbfeb1ea364.jpg",
    code: "PSNI1"
});



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

            console.log(
                "name es ", product.name,
                "\n precio es ", product.price,
                "\n info es ", product.info,
                "\n imagen es ", product.image
            );


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
    const phoneNumber = '9622167188';
    let url = '';

    let name = "";
    let info = "";
    let price = 1;
    let image = "";
    let codigo = "";

    let message = `Me interesaron estos artículos \n ${name} con código: ${codigo}`;

    for (let i = 0; i < productosEnCarr.length; i++) {
        name = productosEnCarr[i].name;
        info = productosEnCarr[i].info;
        price = productosEnCarr[i].price;
        image = productosEnCarr[i].image;
        codigo = productosEnCarr[i].code;

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
