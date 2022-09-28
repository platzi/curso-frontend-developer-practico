const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const asideCarrito = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailSection = document.querySelector('.product-detail-section');
const productDetailSectionClose = document.querySelector('.product-detail-section-close');

navEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarrito);
productDetailSectionClose.addEventListener('click', closeProductDetailSection);

function toggleDesktopMenu() {
    const isAsideCarritoClosed = asideCarrito.classList.contains('inactive');
    const isProductDetailClosed = productDetailSection.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetailSection.classList.add('inactive');
    }

    if (isAsideCarritoClosed == false) {
        asideCarrito.classList.add('inactive');
    }


    if (desktopMenu.classList.contains('inactive') == true) {
        desktopMenu.classList.remove('inactive');
        
    } else if (desktopMenu.classList.contains('inactive') == false) {
        desktopMenu.classList.add('inactive')
    }

    //SOLUCION CORTA
    // desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideCarritoClosed = asideCarrito.classList.contains('inactive');
    const isProductDetailClosed = productDetailSection.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetailSection.classList.add('inactive');
    }

    if (isAsideCarritoClosed == false) {
        asideCarrito.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');

}

function toggleCarrito() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailSection.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetailSection.classList.add('inactive');
    }

    if (isMobileMenuClosed == false) {
        mobileMenu.classList.add('inactive');
    }

    if (isDesktopMenuClosed == false){
        desktopMenu.classList.add('inactive');
    }

    asideCarrito.classList.toggle('inactive');
  
}

function openProductDetailSection() {
    const isAsideCarritoClosed = asideCarrito.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isAsideCarritoClosed) {
        asideCarrito.classList.add('inactive');
    }

    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    productDetailSection.classList.remove('inactive');
}

function closeProductDetailSection() {
    productDetailSection.classList.add('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Clock',
    price: 80,
    image: 'https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'PC Screen',
    price: 315,
    image: 'https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailSection)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const infoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText= '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        infoDiv.appendChild(productPrice);
        infoDiv.appendChild(productName);
    
        const productFigure = document.createElement('figure');
        const figureImgCart = document.createElement('img');
        figureImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    
        productFigure.appendChild(figureImgCart);
    
        productInfo.appendChild(infoDiv);
        productInfo.appendChild(productFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);