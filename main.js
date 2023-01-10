const email = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobilMenu = document.querySelector('.mobile-menu');
const burgerImg = document.querySelector('.menu');
const cartContents = document.querySelector('.product-detail')
const carrito = document.querySelector('.navbar-shopping-cart')
const cardContainer = document.querySelector('.cards-container')

email.addEventListener('click', toogleDesktopMenu);
burgerImg.addEventListener('click',toogleMobilMenu)
carrito.addEventListener('click',toogleCartContens);


function toogleDesktopMenu(){   
    cartContents.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}
function toogleMobilMenu(){
    cartContents.classList.add('inactive');
    mobilMenu.classList.toggle('inactive');
}

function toogleCartContens(){
    desktopMenu.classList.add('inactive');
    mobilMenu.classList.add('inactive');
    cartContents.classList.toggle('inactive');
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
     