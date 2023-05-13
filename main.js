const menuEmail = document.querySelector('.navbar-email');
const menuDes = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const menuMovil = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCar = document.querySelector('.product-shopping');
const productDetailCard = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.card-container');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleMenuDes);

function toggleMenuDes() {
    const isAsideClosed = shoppingCar.classList.contains('inactive');
    if(!isAsideClosed) {
        shoppingCar.classList.add('inactive');
    }

    menuDes.classList.toggle('inactive');
    closeProductDetail();
}

menuBurger.addEventListener('click', toggleMenuMov);

function toggleMenuMov() {
    const isAsideClosed = shoppingCar.classList.contains('inactive');
    if(!isAsideClosed) {
        shoppingCar.classList.add('inactive');
    }

    menuMovil.classList.toggle('inactive');
    closeProductDetail();
};

menuCarritoIcon.addEventListener('click', toggleMenuCarrito);

function toggleMenuCarrito() {
    const isMovilMenuClosed = menuMovil.classList.contains('inactive');
    const isMenuDesClosed = menuDes.classList.contains('inactive');
    if(!isMovilMenuClosed || !isMenuDesClosed) {
        menuMovil.classList.add('inactive');
        menuDes.classList.add('inactive');
    }
    shoppingCar.classList.toggle('inactive');

    const isProductDetailClosed = productDetailCard.classList.contains('inactive');
    if(!isProductDetailClosed) {
        productDetailCard.classList.add('inactive');
    }
}



const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Moto',
    price: 400,
    image: 'https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_1280.jpg'
})

productList.push({
    name: 'Carro',
    price: 600,
    image: 'https://cdn.motor1.com/images/mgl/X48rl/s1/1967-shelby-gt500cr-mustang-by-classic-recreations.jpg'
})

// for(let i = 0; productList.lenght; i++) es lo mismo

function ordenProduct(arr) {
    
    for (product of arr) {

        // otra solucion

    //     const htmlCards = `<div class="product-card">
    //     <img src= ${product.image} class="product-img"> 
    //     <div class="product-info">
    //     <div>
    //         <p>$${product.price}</p>
    //         <p>${product.name}</p>
    //     </div>
    //     <figure>
    //         <img src="./icons/bt_add_to_cart.svg" alt="logo">
    //     </figure>
    //     </div>
    // </div>`
    
    // const cardsContainer = document.querySelector('.card-container');
    // cardsContainer.innerHTML += htmlCards

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);
  
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
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
    }

}

ordenProduct(productList);



// const listen = productList.image.addEventListener('click', console.log);

 function openProductDetailAside() {
     productDetailCard.classList.remove('inactive');
    shoppingCar.classList.add('inactive');
    const isMenuDesClosed = menuDes.classList.contains('inactive');
    if(!isMenuDesClosed) {
        menuDes.classList.add('inactive');
    }
}

productDetailCloseIcon.addEventListener('click', closeProductDetail);

function closeProductDetail() {
    productDetailCard.classList.add('inactive');
}