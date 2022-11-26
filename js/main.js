const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu ");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailClose = document.querySelector(".product-detail-close");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailClose.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
     if (!isAsideClosed) {
       shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
       shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    } 
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    } 
    shoppingCartContainer.classList.toggle('inactive');
}

function openProducrDetailAside (){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');

}

function closeProductDetailAside (){
    productDetailContainer.classList.add('inactive');

}

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Laptop',
    price: 700,
    image: 'https://http2.mlstatic.com/D_NQ_NP_645812-MLA45745111301_042021-O.jpg',
})
productList.push({
    name: 'Xbox',
    price: 500,
    image: 'https://compass-ssl.xbox.com/assets/b9/0a/b90ad58f-9950-44a7-87fa-1ee8f0b6a90e.jpg?n=XSX_Page-Hero-0_768x792.jpg'
})

function renderProducts (arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProducrDetailAside);
     
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv = document.createElement('div');
     
        const productPrice = document.createElement('p');
        productPrice.innerHTML = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerHTML = product.name;
     
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
     
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
     
        productInfoFigure.appendChild(productImgCart);
     
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
     
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
     
        cardsContainer.appendChild(productCard)
     }
}

//llamar funcion
renderProducts(productList);