const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');


navEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu () {
    const isAsideClosed = aside.classList.contains('inactive')

    if(!isAsideClosed){
        aside.classList.toggle('inactive');
    }  
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu () {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if(!isAsideClosed){
        shoppingCartContainer.classList.toggle('inactive');
    }     
    closeProductDetailAside(); 
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

    if(!isMobileMenuClosed){
        mobileMenu.classList.toggle('inactive');
    }   

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }   
    shoppingCartContainer.classList.toggle('inactive');
}

function  openProductDetailAside ( ) {
    shoppingCartContainer.classList.add('inactive');
    
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside () {
    productDetailContainer.classList.add('inactive');

}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Pantalla",
    price: 12000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Mac",
    price: 25000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Pantalla",
    price: 12000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Mac",
    price: 25000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Mac",
    price: 25000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});


function renderProducts (arr){
    //Recorrer el array para pegarlo en el html
    for(producto of arr){//Dato
        const productoCard =  document.createElement('div');
        productoCard.classList.add('product-card');

        const productoImg = document.createElement('img');
        productoImg.setAttribute('src',producto.image);
        productoImg.addEventListener('click', openProductDetailAside)

        const productoInfo =  document.createElement('div');
        productoInfo.classList.add('product-info');

        const productoInfoDiv =  document.createElement('div');

        const productoPrice =  document.createElement('p');
        productoPrice.innerText = '$' + producto.price;

        const productoName =  document.createElement('p');
        productoName.innerText = producto.name;

        productoInfoDiv.appendChild(productoPrice);
        productoInfoDiv.appendChild(productoName);

        const productoInfoFigure =  document.createElement('figure');
        const productoImgCart =  document.createElement('img');
        productoImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

        productoInfoFigure.appendChild(productoImgCart);

        productoInfo.appendChild(productoInfoDiv);
        productoInfo.appendChild(productoInfoFigure);


        productoCard.appendChild(productoImg);
        productoCard.appendChild(productoInfo);

        cardsContainer.appendChild(productoCard);
    }
}

renderProducts(productList);
for(producto in productList){//indice
    
}