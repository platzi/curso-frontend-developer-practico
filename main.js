// Agarrar variables del HTML
const navEmail = document.querySelector(".navbar-email");
const dekstopMenu = document.querySelector(".desktop-menu");

const menuHamburgesa = document.querySelector(".menu");
const dekstopHamburgesa = document.querySelector(".mobile-menu");

const menuShopingIcon = document.querySelector(".navbar-shopping-cart");
const DekstopShoping = document.querySelector("#shoppingCartCointainer");

const cardsContainer = document.querySelector(".cards-container");
// Aplicar Funciones
navEmail.addEventListener('click', toggleDesktopMenu);
menuHamburgesa.addEventListener('click', toggleMenuHamburgesa);
menuShopingIcon.addEventListener('click', toggleDekstopShoping)


// Funciones
function toggleDesktopMenu() {   
    if(!DekstopShoping.classList.contains("inactive")){
        DekstopShoping.classList.add("inactive");
    }
    dekstopMenu.classList.toggle("inactive");
}

function toggleMenuHamburgesa() {
    if (!DekstopShoping.classList.contains("inactive")) {
        DekstopShoping.classList.add("inactive");
    }
    dekstopHamburgesa.classList.toggle("inactive");
}

function toggleDekstopShoping() {    
    if(!dekstopMenu.classList.contains("inactive")){
        dekstopMenu.classList.add("inactive");
        dekstopHamburgesa.classList.add("inactive");
    }
    else if (!dekstopHamburgesa.classList.contains("inactive")) {
        dekstopMenu.classList.add("inactive");
        dekstopHamburgesa.classList.add("inactive");
    }
    DekstopShoping.classList.toggle("inactive");
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
productList.push({
    name: 'IPhone',
    price: 300,
    image: 'https://itechcolombia.co/wp-content/uploads/2022/05/iphone-13-pro-max-silver-select.png'
});


function RenderProducts(arr) {
    for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card')

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info')

    const productInfoDatos = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productInfoFigure = document.createElement('figure');
    const imgShopping = document.createElement('img');
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
