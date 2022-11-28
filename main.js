const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburgesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const ShopingCar = document.querySelector('.navbar-shopping-cart');
const ProductDetail = document.querySelector('.product-detail');
const cardscontainer = document.querySelector('.cards-container');




//Desktop menu
menuEmail.addEventListener('click',toggleDesktopMenu);
function toggleDesktopMenu(){
    const isProductDetailClosed = ProductDetail.classList.contains('inactive');

    if(!isProductDetailClosed){  //si esta abierto el product detail lo CERRAMOS
        ProductDetail.classList.toggle('inactive')
    }
desktopMenu.classList.toggle('inactive'); //QUITA O PONE LA CLASE CON CADA CLICK QUE DEMOS
}

//MOBILE MENU
menuHamburgesa.addEventListener('click',toggleMobilepMenu);
function toggleMobilepMenu(){
    const isProductDetailClosed = ProductDetail.classList.contains('inactive');

    if(!isProductDetailClosed){  //si esta abierto el product detail lo CERRAMOS
        ProductDetail.classList.toggle('inactive')
    }
    mobileMenu.classList.toggle('inactive'); //QUITA O PONE LA CLASE CON CADA CLICK QUE DEMOS
}

//car shoping
ShopingCar.addEventListener('click', togglecarShoping);
function togglecarShoping(){

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenu= desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){ //SI ESTA ABIERTO EL MOBILEMENU SE CIERRA
        mobileMenu.classList.toggle('inactive')
    }
    if(!isDesktopMenu){ //SI ESTA ABIERTO EL MOBILEMENU SE CIERRA
        desktopMenu.classList.toggle('inactive')
    }
    ProductDetail.classList.toggle('inactive'); //QUITA O PONE LA CLASE CON CADA CLICK QUE DEMOS
}

const productList=[];
productList.push({
    name:'bisi',
    price:'200',
    foto:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name:'car',
    price:'300',
    foto:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name:'mop',
    price:'50',
    foto:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})



function renderProducts(arr){
for(product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productimg = document.createElement('img');
    productimg.setAttribute('src', product.foto);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('Div');

    const productPrice = document.createElement('p');
    productPrice.innerText='$' + product.price;
    const productName = document.createElement('p');
    productName.innerText= product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','icons/bt_add_to_cart.svg')

    productInfoFigure.appendChild(productImgCart)

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productimg);
    productCard.appendChild(productInfo);

    cardscontainer.appendChild(productCard);
}
}

renderProducts(productList);

