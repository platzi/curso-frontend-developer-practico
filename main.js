//Esta es la parte de los selectores, es decir, se seleccionan los elementos del html y se asignan a una variable para ser utilizadas en el código de Js

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHambIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const cardsContainer = document.querySelector('.cards-container');

const productDetailContainer = document.querySelector('#productDetail')
const productDetailCloseIcon = document.querySelector('.product-detail-close');

//esta parte son eventos, es decir, dan una repsuesta cuando sucede un evento en nuestro html

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHambIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoshoppingCartContainer);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside );

//estas son las funciones, se utilizan para que el Html sea dinámico

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {

    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoshoppingCartContainer() {

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    

    if (!isMobileMenuClosed) {
        //abrir el shoppingCartContainer
       mobileMenu.classList.add('inactive');
        //si mobileMenu está open, hay que cerrarlo
    }    

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}



function openProductDetailAside (){
   shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');

}

const productList = [];
productList.push ({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push ({
    name: 'xbox',
    price: 250,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push ({
    name: 'funko',
    price: 17,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts (arr) {
    for(product of productList) {
        const productCard = document.createElement('div'); //Document.createElement crea un elemento para el html
        productCard.classList.add('product-card');
    
    //product={name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement ('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    
    }
}

renderProducts (productList);