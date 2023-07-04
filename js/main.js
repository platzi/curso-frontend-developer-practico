// Barra de navegacion sesiones
var navEmail = document.querySelector(".navbar-email");
var panelEmail = document.querySelector(".desktop-menu");

// Menu mobil
var navMenu = document.querySelector(".menu");
var menuMovil = document.querySelector(".mobile-menu");

// carrito
var navOrdenCar = document.querySelector(".navbar-shopping-cart");
var productoDetalle = document.querySelector(".product-detail");

// Detalle de productos
var detailProducOne = document.querySelector(".product-detail-one");
var imgDetail = document.querySelector(".product-detail-close");
var imgDetailProduct = document.querySelector(".img-detail-product");
var datailPrice = document.querySelector(".price");
var detailName = document.querySelector(".name");


const productList = [];
productList.push ({
    num:'1785962',
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    num:'896v0987b',
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    num:'8fydtgauis',
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    num:'7asd85f',
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    num:'cax98032457',
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    num:'097e213',
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    num:'891324jba',
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    num:'dww8q96345',
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    num:'1945nkm4b',
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
});


// --------------------------- MOSTRAR PRODUCTOS ---------------------------
window.addEventListener("load", function() { mostrarProductos(productList) });

// --------------------------- MENU LATERAL DERECHO DE SESIONES PC ---------------------------
navEmail.addEventListener("click", function() {
    const isMobileMenuClose = productoDetalle.classList.contains('ocultar');
    const isDetailProd = detailProducOne.classList.contains('ocultar');

    if(!isMobileMenuClose) {
        productoDetalle.classList.add('ocultar');
    } else if(!isDetailProd) {
        detailProducOne.classList.add('ocultar');
    }

    panelEmail.classList.toggle('ocultar');
});

// --------------------------- MENU LATERAL IZQUIERDO MOVIL ---------------------------
navMenu.addEventListener("click", function() {
    const isMobileMenuClose = productoDetalle.classList.contains('ocultar');
    const isDetailProd = detailProducOne.classList.contains('ocultar');

    if(!isMobileMenuClose) {
        productoDetalle.classList.add('ocultar');
    } else if(!isDetailProd) {
        detailProducOne.classList.add('ocultar');
    }

    menuMovil.classList.toggle('ocultar');
});

// --------------------------- MENU ORDEN CARRITO ---------------------------
navOrdenCar.addEventListener("click", function() {
    const isMobileMenuClose = menuMovil.classList.contains('ocultar');
    const isPcPanelSesion = panelEmail.classList.contains('ocultar');
    const isDetailProd = detailProducOne.classList.contains('ocultar');

    if(!isMobileMenuClose) {
        menuMovil.classList.add('ocultar');
    } else if(!isPcPanelSesion) {
        panelEmail.classList.add('ocultar');
    } else if(!isDetailProd) {
        detailProducOne.classList.add('ocultar');
    }

    productoDetalle.classList.toggle('ocultar');
});

// --------------------------- PRODUCTOS ---------------------------
function mostrarProductos(lista) {
    const contenedorProd = document.querySelector(".cards-container");
    var productos = ``;

    for(listProd of lista) {
        productos = `<div class="product-card">
                        <img src="${listProd.image}" onclick="openDetailProduc('${listProd.image}', ${listProd.price}, '${listProd.name}')" alt="">
                        <div class="product-info">
                            <div>
                                <p>$${listProd.price}.00</p>
                                <p>${listProd.name}</p>
                            </div>
                            <figure>
                                <img src="./icons/bt_add_to_cart.svg" alt="">
                            </figure>
                        </div>
                    </div>`;

        contenedorProd.innerHTML += productos;
    }
}

// --------------------------- DETALLE DEL PRODUCTO ---------------------------
imgDetail.addEventListener("click", function() { detailProducOne.classList.add("ocultar"); });

function openDetailProduc(img, price, name) {
    const isMobileMenuClose = productoDetalle.classList.contains('ocultar');
    const isPcPanelSesion = panelEmail.classList.contains('ocultar');

    imgDetailProduct.src = img;
    datailPrice.innerText = "$"+price+".00";
    detailName.innerText = name;


    if(!isMobileMenuClose) {
        productoDetalle.classList.add('ocultar');
    } else if(!isPcPanelSesion) {
        panelEmail.classList.add('ocultar');
    }

    detailProducOne.classList.remove("ocultar");
}
