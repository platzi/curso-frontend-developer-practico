const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCart = document.querySelector('.navbar-shopping-cart');
const asideMenu = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')


menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCart.addEventListener('click', toggleAsideMenu);

function toggleDesktopMenu() {
    const isAsideMenuClosed = asideMenu.classList.contains('inactive');

    if(!isAsideMenuClosed) {
        asideMenu.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideMenuClosed = asideMenu.classList.contains('inactive');

    if(!isAsideMenuClosed) {
        asideMenu.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleAsideMenu() {


    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    //asideMenu.classList.toggle('inactive');
    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    asideMenu.classList.toggle('inactive');

}

const productList = [];

productList.push({

    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productList.push({

    name: 'Pantalla',
    price: '220',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productList.push({

    name: 'Compu',
    price: '620',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productList.push({

    name: 'Mueble',
    price: '300',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productList.push({

    name: 'Mueble',
    price: '300',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});


function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        const productName = document.createElement('p');
    
        productPrice.innerText = (`$${product.price}`);
        productName.innerText = (`${product.name}`); 
    
        productInfoDiv.append(productPrice, productName);
        
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')   
    
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);