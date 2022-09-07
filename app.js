const nvEmail = document.querySelector('.navbar-email');
const dtMenu = document.querySelector('.desktop-menu');

const menuHam = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCart = document.querySelector('.navbar-shopping-cart');
const myOrder = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');


nvEmail.addEventListener('click', desplegarMenu);
menuHam.addEventListener('click', toggleMenuMobile );
shoppingCart.addEventListener('click', toggleCarritoAside)


function desplegarMenu(){
    dtMenu.classList.toggle('inactive');
    myOrder.classList.add('inactive');
}

function toggleMenuMobile(){
    mobileMenu.classList.toggle('inactive')
    myOrder.classList.add('inactive');
}

function toggleCarritoAside(){
    myOrder.classList.toggle('inactive');
    dtMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive')
}

function renderProducts(arr){
    for(product of arr){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card'); //padre
        
    
        const productCardImg = document.createElement('img');
        productCardImg.setAttribute('src', product.image); //primer hijo
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info'); //segundo hijo
    
        const productInfoDiv = document.createElement('div'); //nieto hijo del segundo
        const productPrecio = document.createElement('p');
        productPrecio.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = '$' + product.name;
        
    
        
        const productFigure = document.createElement('figure');
        const figureImg = document.createElement('img');
        figureImg.setAttribute('src', './icons/bt_add_to_cart.svg' );
    
        productCard.append(productCardImg, productInfo);
    
        productInfo.append(productInfoDiv, productFigure);
    
        productInfoDiv.append(productPrecio, productName);
    
        productFigure.append(figureImg);
    
        cardsContainer.appendChild(productCard);
        
    }
}

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

renderProducts(productList);


