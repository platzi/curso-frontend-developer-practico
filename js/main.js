
var i = 1;
var lista = "";
var copiaLista = [];
var total = 0;

// const API = "https://api.escuelajs.co/api/v1";
const API = "https://fakestoreapi.com";

// Barra de navegacion sesiones
var navEmail = document.querySelector(".navbar-email");
var panelEmail = document.querySelector(".desktop-menu");

// Menu mobil
var navMenu = document.querySelector(".menu");
var menuMovil = document.querySelector(".mobile-menu");

// carrito
var navOrdenCar = document.querySelector(".navbar-shopping-cart");
var productoDetalle = document.querySelector(".product-detail");
var containerDetail = document.querySelector("#order-content-product");
var numDetail = document.getElementById("num-detail");

// Detalle de productos
var detailProducOne = document.querySelector(".product-detail-one");
var imgDetail = document.querySelector(".product-detail-close");
var imgDetailProduct = document.querySelector(".img-detail-product");
var datailPrice = document.querySelector(".price");
var detailName = document.querySelector(".name");
var detailDescription = document.querySelector(".content-description");
var totalDetail = document.querySelector("#totalDetail");

// --------------------------- GET PRODUCTOS FETCH ---------------------------
function getProducts() {
    const xhr = new XMLHttpRequest();
    const url = "./js/products.txt";

    xhr.open("GET", url);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            lista = this.responseText;
            mostrarProductos(JSON.parse(this.responseText));
        }
    }
}

fetch(`${API}/products`)
    .then(response => response.json())
    .then(productos => {
        lista = productos;
        mostrarProductos(productos);
    })

// --------------------------- MOSTRAR PRODUCTOS ---------------------------
// getProducts();


// --------------------------- MENU LATERAL DERECHO DE SESIONES PC ---------------------------
navEmail.addEventListener("click", function () {
    const isMobileMenuClose = productoDetalle.classList.contains('ocultar');
    const isDetailProd = detailProducOne.classList.contains('ocultar');

    if (!isMobileMenuClose) {
        productoDetalle.classList.add('ocultar');
    } else if (!isDetailProd) {
        detailProducOne.classList.add('ocultar');
    }

    panelEmail.classList.toggle('ocultar');
});

// --------------------------- MENU LATERAL IZQUIERDO MOVIL ---------------------------
navMenu.addEventListener("click", function () {
    const isMobileMenuClose = productoDetalle.classList.contains('ocultar');
    const isDetailProd = detailProducOne.classList.contains('ocultar');

    if (!isMobileMenuClose) {
        productoDetalle.classList.add('ocultar');
    } else if (!isDetailProd) {
        detailProducOne.classList.add('ocultar');
    }

    menuMovil.classList.toggle('ocultar');
});

// --------------------------- MENU ORDEN CARRITO ---------------------------
navOrdenCar.addEventListener("click", function () {
    const isMobileMenuClose = menuMovil.classList.contains('ocultar');
    const isPcPanelSesion = panelEmail.classList.contains('ocultar');
    const isDetailProd = detailProducOne.classList.contains('ocultar');

    if (!isMobileMenuClose) {
        menuMovil.classList.add('ocultar');
    } else if (!isPcPanelSesion) {
        panelEmail.classList.add('ocultar');
    } else if (!isDetailProd) {
        detailProducOne.classList.add('ocultar');
    }

    productoDetalle.classList.toggle('ocultar');
});

// --------------------------- PRODUCTOS ---------------------------
function mostrarProductos(lista) {
    const contenedorProd = document.querySelector(".cards-container");

    for (listProd of lista) {

        var div1 = document.createElement('div');
            div1.classList.add('product-card');

            var img1 = document.createElement('img');
            img1.setAttribute("src", listProd.image);
            img1.setAttribute("onclick", "openDetailProduc("+JSON.stringify(listProd.image)+","+JSON.stringify(listProd.price)+","+JSON.stringify(listProd.title)+","+JSON.stringify(listProd.description)+")");
            div1.appendChild(img1);
        
            var div2 = document.createElement('div');
            div2.classList.add('product-info');

                var div3 = document.createElement('div');
                    var p1 = document.createElement('p');
                    p1.innerText = "$" + listProd.price;
                    div3.appendChild(p1);
                    var p2 = document.createElement('p');
                    p2.innerText = listProd.title;
                    div3.appendChild(p2);
                div2.appendChild(div3);

                var button = document.createElement('button');
                    button.setAttribute("type", "button");
                    button.setAttribute("onclick", "addDetail("+ listProd.id +","+listProd.price+")");
                    var img2 = document.createElement('img');
                    img2.setAttribute("src", "./icons/bt_add_to_cart.svg");
                    img2.setAttribute("alt", "boton de agregar al carrito");
                    button.appendChild(img2);
                div2.appendChild(button);

        div1.appendChild(div2);
        contenedorProd.append(div1);
    }
}

function addDetail(id, price) {
    numDetail.classList.add("visual-number-detail");
    numDetail.innerText = i++;

    var results = copiaLista.filter(function (copiaLista) {
        return copiaLista.id == Number(id);
    });

    if(results == "") {
        addProductDetail(id);
    } else {
        var priceX = document.querySelector(`[id='${price}']`).innerText;
        let count = document.getElementById(id).innerText;
        let num = Number(priceX) + price;
        document.getElementById(id).innerHTML = ++count;
        document.querySelector(`[id='${price}']`).innerHTML = num.toFixed(2);
        
        modiyListCount(id, count);
        ViewPrice(price);
    }
}

function modiyListCount(id, count) {
    for (let index = 0; index < copiaLista.length; index++) {
        if(copiaLista[index].id == id) {
            copiaLista[index].count = count;
            break;
        }
        console.log('1s');
    }
}

function addProductDetail(id) {
    for(respuesta of lista) {
        if(respuesta.id == Number(id)) {
            copiaLista.push({
                id: respuesta.id,
                title: respuesta.title,
                price: respuesta.price,
                image: respuesta.image,
                count: 1
            });

            ViewProductsDetail(copiaLista);
            ViewPrice(respuesta.price);
            break;
        }
    }
}

function ViewProductsDetail(list) {
    var orderDetail = ``;
    
    for (let index = 0; index < list.length; index++) {
        let num = list[index].price;
        orderDetail = `<div class="shopping-cart">
                            <figure>
                                <img src="${list[index].image}" alt="imagen">
                            </figure>
                            <p>${list[index].title}</p>
                            <p>X<span id="${list[index].id}">1</span></p>
                            <p>$<span id="${list[index].price}">${num.toFixed(2)}</span></p>
                            <img src="./icons/icon_close.png" alt="close">
                        </div>`;
    }
    containerDetail.innerHTML += orderDetail;

}

function ViewPrice(price) {
    total = total + Number(price);
    totalDetail.innerText = "$" + total.toFixed(2);
}

// function accionReemplazar() {
//     for(resp of copiaLista) {

//     }
// }


// --------------------------- DETALLE DEL PRODUCTO ---------------------------
imgDetail.addEventListener("click", function () { detailProducOne.classList.add("ocultar"); });

function openDetailProduc(img, price, name, description) {
    const isMobileMenuClose = productoDetalle.classList.contains('ocultar');
    const isPcPanelSesion = panelEmail.classList.contains('ocultar');

    imgDetailProduct.src = img;
    datailPrice.innerText = "$" + price;
    detailName.innerText = name;
    detailDescription.innerText = description;


    if (!isMobileMenuClose) {
        productoDetalle.classList.add('ocultar');
    } else if (!isPcPanelSesion) {
        panelEmail.classList.add('ocultar');
    }

    detailProducOne.classList.remove("ocultar");
}
