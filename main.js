const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('.shoppingCartContainer');
const productDetailContainer = document.querySelector('#product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container')
const ShoppingCartArrow = document.querySelector('.arrow-close');


menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCart.addEventListener('click', toggleshoppingCartContainer);

function toggleDesktopMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {

    closeProductDetailAside();
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleshoppingCartContainer() {

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    //shoppingCartContainer.classList.toggle('inactive');
    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');

}

function closeMyOrder(){
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
        shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];

productList.push({

    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productList.push({

    name: 'Monitor',
    price: '220',
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

});
productList.push({

    name: 'Cell Phone',
    price: '620',
    image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

});
productList.push({

    name: 'Table',
    price: '300',
    image: 'https://images.pexels.com/photos/2451264/pexels-photo-2451264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

});
productList.push({

    name: 'TV',
    price: '300',
    image: 'https://images.pexels.com/photos/9069364/pexels-photo-9069364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

});
productList.push({

    name: 'Box',
    price: '300',
    image: 'https://images.pexels.com/photos/5486844/pexels-photo-5486844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

});
productList.push({

    name: 'Sofa',
    price: '300',
    image: 'https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

});
productList.push({

    name: 'Mouse',
    price: '300',
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

});
productList.push({

    name: 'Keyboard',
    price: '300',
    image: 'https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

});
productList.push({

    name: 'Cam',
    price: '300',
    image: 'https://images.pexels.com/photos/14130194/pexels-photo-14130194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

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

        productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

        ShoppingCartArrow.addEventListener('click', closeMyOrder);

        productImg.addEventListener('click', openProductDetailAside);
    
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

