const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

hamburgerMenu.addEventListener('click',()=> {
    mobileMenu.classList.toggle('inactive')
    shoppingCartContainer.classList.add('inactive')
})


menuEmail.addEventListener('click',()=> {
    desktopMenu.classList.toggle('inactive')
    shoppingCartContainer.classList.add('inactive')
})

menuCarritoIcon.addEventListener('click',()=> {
    shoppingCartContainer.classList.toggle('inactive')
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
})

const productList = [];

productList.push({
    name: 'Byke',
    price: 120,
    image: 'https://picsum.photos/300/200',
});
productList.push({
    name: 'Pantalla',
    price: 5000,
    image: 'https://picsum.photos/300/200',
});
productList.push({
    name: 'Computadora',
    price: 512,
    image: 'https://picsum.photos/300/200',
});

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
        
        //product = {name, price, image} -> product.image
    }
}

renderProducts(productList);