
// CONST
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCar = document.querySelector('.navbar-shopping-cart');
const productDetails = document.querySelector('.product-detail');
const cardContainer = document.querySelector('.cards-container');

//NAME FUNCION
menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
shoppingCar.addEventListener('click', showMyOrders)

//DESKTOP MENU

function toggleDesktopMenu(){
    const isProductDetailsClosed =  productDetails.classList.contains('inactive');

    if (!isProductDetailsClosed){
        productDetails.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

// MOBILE MENU
function toggleMobileMenu(){

    const isProductDetailsClosed =  productDetails.classList.contains('inactive');

    if (!isProductDetailsClosed){
        productDetails.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}


// MY CAR DESPLEGABLE



function showMyOrders(){
    mobileMenu.classList.add('inactive')
    productDetails.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    
};

//AGREGANDO LISTA DE PRODUCTOS 

const productList = [];

productList.push({
    name:'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Car',
    price:1200,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Computer',
    price:600,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Computer',
    price:600,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Computer',
    price:600,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Computer',
    price:600,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Computer',
    price:600,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Computer',
    price:600,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Computer',
    price:600,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Computer',
    price:600,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


function  renderProducts(arr){
    for (Product of productList){

        const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImage = document.createElement('img');
    productImage.setAttribute('src', Product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + Product.price;

    const productName= document.createElement('p');
    productName.innerText =  Product.name;

    productInfoDiv.append(productPrice,productName);

    const productInfoFigure= document.createElement('figure');
    const productImgCard= document.createElement('img');
    productImgCard.setAttribute('src', '/icons/bt_add_to_cart.svg'); 

    productInfoFigure.append(productImgCard);
    
    productInfo.append(productInfoDiv,productInfoFigure);

    productCard.append(productImage,productInfo);

    cardContainer.append(productCard);

}
}    
// 

renderProducts(productList);


