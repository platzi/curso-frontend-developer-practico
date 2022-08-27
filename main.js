// Agarrar variables del HTML
const navEmail = document.querySelector(".navbar-email");
const dekstopMenu = document.querySelector(".desktop-menu");

const menuHamburgesa = document.querySelector(".menu");
const dekstopHamburgesa = document.querySelector(".mobile-menu");

const iconBackCart = document.querySelector(".iconBackCart");
const menuShopingIcon = document.querySelector(".navbar-shopping-cart");
const DekstopShoping = document.querySelector("#shoppingCartCointainer");

const cardsContainer = document.querySelector(".cards-container");

const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

// Aplicar Funciones
navEmail.addEventListener('click', toggleDesktopMenu);
menuHamburgesa.addEventListener('click', toggleMenuHamburgesa);
menuShopingIcon.addEventListener('click', toggleDekstopShoping);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
iconBackCart.addEventListener('click', CloseBackCart);

// Funciones
function toggleDesktopMenu() {   
    dekstopMenu.classList.toggle("inactive");
    // cerrar otras cosas 
    DekstopShoping.classList.add("inactive");
    closeProductDetailAside()  
}

function toggleMenuHamburgesa() {
    dekstopHamburgesa.classList.toggle("inactive");
    // cerrar otras cosas
    DekstopShoping.classList.add("inactive");
    productDetailContainer.classList.add('inactive');   
}

function toggleDekstopShoping() {   
    DekstopShoping.classList.toggle("inactive");
    // cerrar otras cosas
    dekstopMenu.classList.add("inactive");
    dekstopHamburgesa.classList.add("inactive");
    dekstopMenu.classList.add("inactive");
    dekstopHamburgesa.classList.add("inactive");
    closeProductDetailAside() 
}

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive')
    // cerrar otras cosas
    DekstopShoping.classList.add("inactive");
    dekstopMenu.classList.add("inactive");
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

function CloseBackCart() {
    DekstopShoping.classList.add('inactive')
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 200,
    image: 'https://e.rpp-noticias.io/normal/2021/08/31/343434_1138381.jpg'
});
productList.push({
    name: 'Computador',
    price: 280,
    image: 'https://andrenoob.files.wordpress.com/2021/01/setup-pc-gaming-1977277.jpg?w=1600&h=768&crop=1'
});

function RenderProducts(arr) {
    for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card')

    const productImg = document.createElement('img');
    productImg.classList.add('clickImage');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside)

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info')

    const productInfoDatos = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productInfoFigure = document.createElement('figure');
    const imgShopping = document.createElement('img');
    imgShopping.classList.add('clickImage');
    imgShopping.setAttribute('src', './icons/bt_add_to_cart.svg');

    
    //maquetado aqui para entender xd

    productInfoDatos.append(productPrice, productName);
    productInfoFigure.appendChild(imgShopping);
    productInfo.append(productInfoDatos, productInfoFigure);
    productCard.append(productImg, productInfo);
    cardsContainer.appendChild(productCard);

}  
}

RenderProducts(productList);
