
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
    name: "higado",
    price: 100,
    image: "https://images.pexels.com/photos/8272928/pexels-photo-8272928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    info: "El hígado es un órgano del cuerpo humano que se encuentra en la parte superior derecha del abdomen y es de color marrón oscuro. Tiene múltiples funciones importantes, como procesar los nutrientes de los alimentos, almacenar energía, producir bilis para la digestión y filtrar la sangre para eliminar sustancias tóxicas y desechos del cuerpo.",
    code: "H123"
});

productList.push({
    name: "Pulmones",
    info: "Los pulmones son órganos del sistema respiratorio que se encuentran dentro del tórax, en la cavidad torácica. La función principal de los pulmones es la respiración, es decir, permiten la entrada de aire rico en oxígeno y la eliminación de dióxido de carbono y otros gases residuales del cuerpo",
    price: 200,
    image:
        "https://imgs.search.brave.com/dh_Mjj5R_AIHMtR5BhT3_FsN5DdckfpmwqInba19GQU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/bHVuZ3NhbmR5b3Uu/Y29tL3N0YXRpYy9p/bWFnZXMvcHJvZ3Jl/c3Npb24vbm9ybWFs/LWx1bmdzLmpwZw",
    code: "PUL321"

    });

productList.push({
    info: "El riñón es un órgano en forma de frijol que se encuentra en la parte inferior de la caja torácica. Es responsable de filtrar la sangre para eliminar los desechos y el exceso de líquido del cuerpo. Los riñones también mantienen el equilibrio de electrolitos, la presión arterial y la producción de glóbulos rojos. Además, producen una hormona llamada eritropoyetina que estimula la producción de glóbulos rojos en la médula ósea.",
    name: "Riñones",
    price: 300,
    image:
        "https://e7.pngegg.com/pngimages/779/986/png-clipart-kidney-kidney-failure-membranoproliferative-glomerulonephritis-minimal-change-disease-membranous-glomerulonephritis-kidney-miscellaneous-hand.png",
    code: "R3231"

    });

productList.push({
    info: "El corazón es un órgano muscular que se encuentra en el pecho y que se encarga de bombear la sangre a través del sistema circulatorio del cuerpo. Es esencial para el suministro de oxígeno y nutrientes a los tejidos y órganos del cuerpo, y para eliminar los productos de desecho y dióxido de carbono del cuerpo.",
    name: "Corazon",
    price: 400,
    image:
        "https://imgs.search.brave.com/Z3PoQVmWJ_40IDszsejme7GleijpmUKzXLjOuSpATXw/rs:fit:840:784:1/g:ce/aHR0cHM6Ly93d3cu/Y2xpcGFydG1heC5j/b20vcG5nL21pZGRs/ZS8yMDctMjA3Nzky/N19odW1hbi1oZWFy/dC1jbGlwYXJ0LXBu/Zy1yZWFsLWhlYXJ0/LWRyYXdpbmcucG5n",
    code: "CORA123"
    
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
        imgproductinfo.setAttribute('src', './icons/bt_add_to_cart.svg')

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

    // addCar.addEventListener('click', function () {
    //     productoAgregado.push({
    //         name: nombre,
    //         price: precio,
    //         descripcion: info,
    //         image: imagen
    //     })
    //     // console.log(productoAgregado);
    //     agregarCarrito(productoAgregado);

    // })

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

    // if (verificarProducto(producto[0].name)) {
    //     productoACarrito = []
    //     //  return modal.style.display = 'grid'
    //     return console.log("repetido");
    // }

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
    imgcloseShoppingCart.setAttribute('src', './icons/icon_close.png')
    imgcloseShoppingCart.classList.add('removeList')
    // /* Se agregan la cantidad de productos ademas de la suma de precios */
    // countCarrito.innerText = document.querySelectorAll('.shopping-cart').length
    // totalCarrito.innerText = '$' + (Number(totalCarrito.innerText.substring(1)) + Number(product1.price))
    // productosEnCarrito.push(product1.name)

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

        console.log("el resultado que va:  \n",result);

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
  