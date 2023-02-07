const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuMobileMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuProductDetail = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuMobileMenu.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleIconCarMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    menuProductDetail.classList.add('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    menuProductDetail.classList.add('inactive');
}

function toggleIconCarMenu(){
    menuProductDetail.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arrays){
    for (product of arrays){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const prodImg = document.createElement('img');
        prodImg.setAttribute('src',product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerHTML = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerHTML = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCar = document.createElement('img');
    
        productImgCar.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.append(productImgCar);
        productInfoDiv.append(productPrice,productName);
        productInfo.append(productInfoDiv,productInfoFigure);
        productCard.append(prodImg,productInfo);
        cardsContainer.append(productCard);
    }
}

renderProducts (productList);

/*
    <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
    </div> 
*/