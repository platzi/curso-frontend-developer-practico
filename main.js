const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector("img.menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const asideCarrito = document.querySelector(".product-detail");
const cardscontainer = document.querySelector(".cards-container");

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleAsideCarrito);

function toggleDesktopMenu() {
    const isAsideCarritoClosed = asideCarrito.classList.contains('inactive');

    
    if(!isAsideCarritoClosed){
        asideCarrito.classList.add('inactive');
    }

    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu() {
    const isAsideCarritoClosed = asideCarrito.classList.contains('inactive');

    
    if(!isAsideCarritoClosed){
        asideCarrito.classList.add('inactive');
    }

    mobileMenu.classList.toggle("inactive")
}
function toggleAsideCarrito() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    //si mobileMenu está abierto hay que cerrarlo
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    asideCarrito.classList.toggle("inactive");

}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Screen',
    price: 220,
    image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: 'Laptop',
    price: 480,
    image: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

function renderProducts(pList) {
    
for (product of pList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    const ima = document.createElement('img');
    ima.setAttribute('src', product.image);
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productinfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    productinfoDiv.appendChild(productPrice);
    productinfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    
    productImgCart.setAttribute('src', "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productinfoDiv);
    productInfo.appendChild(productInfoFigure);
    productCard.appendChild(ima);
    productCard.appendChild(productInfo);

    cardscontainer.appendChild(productCard)
}
}

renderProducts(productList);