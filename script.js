const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const asaid = document.querySelector('.product-detail');
const cardasContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleasaid)

function toggleDesktopMenu() {

    const isAsaidClose = asaid.classList.contains('inactive');

    if (!isAsaidClose) {
        asaid.classList.add('inactive');
    
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsaidClose = asaid.classList.contains('inactive');

    if (!isAsaidClose) {
        asaid.classList.add('inactive');
    
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleasaid() {
    const ismobileMenuclose = mobileMenu.classList.contains('inactive');

    if (!ismobileMenuclose) {
        mobileMenu.classList.add('inactive');
    
    }
    
    asaid.classList.toggle('inactive');
}

const productlist = [];

productlist.push({
    name: 'Bake',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productlist.push({
    name: 'pantalla',
    price: 220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productlist.push({
    name: 'compu',
    price: 620,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
    for(product of productlist){
        const productcard = document.createElement('div');
        productcard.classList.add('product-card')
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
    
        productcard.appendChild(productImg);
        productcard.appendChild(productInfo);
    
        cardasContainer.appendChild(productcard);
    
    }
}

renderProducts(productlist);