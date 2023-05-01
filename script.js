const $ = (selector) => document.querySelector(selector); // Simplifica crear las constantes de los elementos html
const navbarEmail = $(".navbar-email");
const desktopMenu = $(".desktop-menu");
const hamMenu = $(".menu");
const mobileMenu = $(".mobile-menu");
const cart = $(".navbar-shopping-cart");
const productDetail = $(".product-detail");
const productList = [];
const cardsContainer = $(".cards-container");
const productCardDetails = $(".product-details");
const productCardDetailsClose = $(".product-detail-close");
const productCardImg = $(".product-detail-img");


navbarEmail.addEventListener('click', toggleDesktopMenu);
hamMenu.addEventListener('click', toggleMobileMenu);
cart.addEventListener('click', toggleProductDetail);
productCardDetailsClose.addEventListener('click',cerrarInfoProducto);

// Mostrar/ocultar menu de usuario en desktop y tablets grandes
function toggleDesktopMenu() {
    if (desktopMenu.classList.contains('inactive')) {
        desktopMenu.style.animation = "appear 1.5s";
        if (productDetail.classList.contains('inactive')){
            desktopMenu.classList.toggle('inactive');
        } else {
            productDetail.classList.add('inactive');
            desktopMenu.classList.toggle('inactive');
        }
        
    } else {
        desktopMenu.style.animation = "disappear 600ms";
        setTimeout(function () {
            desktopMenu.classList.toggle('inactive');
        }, 590);
    }
}

// Mostrar/ocultar menu de usuario y de navegacion en mobile
function toggleMobileMenu() {
    if (mobileMenu.classList.contains('inactive')) {
        mobileMenu.style.animation = "slide-right 600ms";
        if (productDetail.classList.contains('inactive')) {
            productCardDetails.classList.add('inactive');
            mobileMenu.classList.toggle('inactive');
        } else {
            productDetail.style.animation = "unslide-left 600ms";
            setTimeout(function () {
                productDetail.classList.toggle('inactive');
            }, 590);
            productCardDetails.classList.add('inactive');
            mobileMenu.classList.toggle('inactive');
        }
    } else {
        mobileMenu.style.animation = "unslide-right 600ms";
        setTimeout(function () {
            mobileMenu.classList.toggle('inactive');
        }, 590);
    }
}

// Mostrar ocultar menu de carrito
function toggleProductDetail() {
    if (productDetail.classList.contains('inactive')) {
        productDetail.style.animation = "slide-left 600ms";
        if (mobileMenu.classList.contains('inactive')) {
            desktopMenu.classList.add('inactive');
            productCardDetails.classList.add('inactive');
            productDetail.classList.toggle('inactive');
        } else {
            mobileMenu.style.animation = "unslide-right 600ms";
            setTimeout(function () {
                mobileMenu.classList.toggle('inactive');
            }, 590);
            desktopMenu.classList.add('inactive');
            productCardDetails.classList.add('inactive');
            productDetail.classList.toggle('inactive');
        }
    } else {
        productDetail.style.animation = "unslide-left 600ms";
        setTimeout(function () {
            productDetail.classList.toggle('inactive');
        }, 590);
    }
}


productList.push(
    {name:'Bike',price:120,image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
);
productList.push(
    {name:'Electro Bike',price:550,image:'https://images.pexels.com/photos/8936922/pexels-photo-8936922.jpeg?auto=compress&cs=tinysrgb&w=600'}
);
productList.push(
    {name:'Bike',price:250,image:'https://i.pinimg.com/564x/51/a2/00/51a200a727eef9311725fd798bf761df.jpg'}
);
productList.push(
    {name:'Bike',price:120,image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
);
productList.push(
    {name:'Electro Bike',price:550,image:'https://images.pexels.com/photos/8936922/pexels-photo-8936922.jpeg?auto=compress&cs=tinysrgb&w=600'}
);
productList.push(
    {name:'Bike',price:250,image:'https://i.pinimg.com/564x/51/a2/00/51a200a727eef9311725fd798bf761df.jpg'}
);
productList.push(
    {name:'Bike',price:120,image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
);
productList.push(
    {name:'Electro Bike',price:550,image:'https://images.pexels.com/photos/8936922/pexels-photo-8936922.jpeg?auto=compress&cs=tinysrgb&w=600'}
);
productList.push(
    {name:'Bike',price:250,image:'https://i.pinimg.com/564x/51/a2/00/51a200a727eef9311725fd798bf761df.jpg'}
);

function renderProducts (list) {
    for (product of list) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click',desplegarInfoProducto);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const infoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const figure = document.createElement('figure');
        const figureImg = document.createElement('img');
        figureImg.setAttribute('src', "./icons/bt_add_to_cart.svg");
    
        figure.append(figureImg);
        infoDiv.append(productName, productPrice);
        productInfo.append(infoDiv, figure);
        productCard.append(productImg, productInfo);
    
        
        cardsContainer.append(productCard);
        
    }
}

renderProducts(productList)

const productImgs = document.querySelectorAll('.product-img');

function desplegarInfoProducto() {
    productDetail.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productCardDetails.classList.remove('inactive');
}

function cerrarInfoProducto() {
    productCardDetails.classList.add('inactive');
}
