const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const desplegableMobileMenu = document.querySelector('.mobile-menu');
const bottonHamMobileMenu = document.querySelector('.menu');

const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

const productDetail2 = document.querySelector('.product-detail2')

const botonProductDetail2Close = document.querySelector('.product-detail2-close');

const cardsContainer = document.querySelector('.cards-container');
navbarEmail.addEventListener('click', ()=>{
    desktopMenu.classList.toggle('showActive')
    productDetail.classList.add('showActive');
});
bottonHamMobileMenu.addEventListener('click', ()=>{
    desplegableMobileMenu.classList.toggle('showActive')
    productDetail.classList.add('showActive');
})

navbarShoppingCart.addEventListener('click', () => {
    productDetail.classList.toggle('showActive');
    desplegableMobileMenu.classList.add('showActive')
})




// ------- AGREGANDO PRODUCTOS ----------
const productList = [];

productList.push({
    name: 'bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'pc',
    price: 120,
    image: 'https://www.venex.com.ar/products_images/1659379310_1656441054_ew.jpg'
})

function closeProductDetail(){
    productDetail.classList.add('showActive');
}
function openProductDetail2(){
    productDetail2.classList.remove('showActive');
}


function productsRender(arr){
    for(products of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', products.image);
        productImg.addEventListener('click', openProductDetail2);
     


        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = products.price;
        const productName = document.createElement('p');

        const productFigure = document.createElement('figure');
        const productFigureImg = document.createElement('img');
        productFigureImg.setAttribute('src', "./icons/bt_add_to_cart.svg");




        productName.innerText = products.name;
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        productFigure.appendChild(productFigureImg);

        cardsContainer.appendChild(productCard);

      };
}

productsRender(productList);

botonProductDetail2Close.addEventListener('click', ()=>{
    productDetail2.classList.add('showActive');
    
});