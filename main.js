const email = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobilMenu = document.querySelector('.mobile-menu');
const burgerImg = document.querySelector('.menu');
const shoppingCardContainer = document.querySelector('#shoppingCardContainer')
const productDetailAside = document.querySelector('#productDetail')
const carrito = document.querySelector('.navbar-shopping-cart')
const cardContainer = document.querySelector('.cards-container')
const productDetailClose = document.querySelector('.product-detail-close')

email.addEventListener('click', toogleDesktopMenu);
burgerImg.addEventListener('click',toogleMobilMenu)
carrito.addEventListener('click',toogleCartContens);
productDetailClose.addEventListener('click', closeProductDetail);

function openProductDetailAside(){
    productDetailAside.classList.remove('inactive');
    shoppingCardContainer.classList.add('inactive');
    mobilMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

function closeProductDetail(){
    productDetailAside.classList.add('inactive')
};

function toogleDesktopMenu(){   
    shoppingCardContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
    productDetailAside.classList.add('inactive');

}
function toogleMobilMenu(){
    shoppingCardContainer.classList.add('inactive');
    mobilMenu.classList.toggle('inactive');
    productDetailAside.classList.add('inactive')
}

function toogleCartContens(){
    productDetailAside.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobilMenu.classList.add('inactive');
    shoppingCardContainer.classList.toggle('inactive');
}
const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'tv',
    price: 300,
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'PC',
    price: 1200,
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(array) {
    for (product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.img);
        productImg.addEventListener('click',openProductDetailAside);
        

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);


        const productInfoFigure = document.createElement('figure');

        const productInfoFigureImg = document.createElement('img');
        productInfoFigureImg.setAttribute('src','./icons/bt_add_to_cart.svg');
        

        productInfoFigure.appendChild(productInfoFigureImg);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardContainer.appendChild(productCard);
       




        
     }
};
renderProducts(productList);
     