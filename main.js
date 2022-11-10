const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCardContainer = document.querySelector("#shoppingCardContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClose = shoppingCardContainer.classList.contains('inactive');

    if(!isAsideClose){
        shoppingCardContainer.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isAsideClose = shoppingCardContainer.classList.contains('inactive');

    if(!isAsideClose){
        shoppingCardContainer.classList.add("inactive");
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClose){
        mobileMenu.classList.add("inactive");
    }

    const isProductDetailClose = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClose){
        productDetailContainer.classList.add("inactive");
    }

    shoppingCardContainer.classList.toggle("inactive");


}

function openProductDetailAside(){
    shoppingCardContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}


const productList = [];
productList.push({
    name: 'Muscletech Gold Whey',
    price: 580.00,
    image: "https://images-na.ssl-images-amazon.com/images/I/51N2w3Cj+wL._SX600_.jpg"
})
productList.push({
    name: 'GAT Testrol Gold',
    price: 230.00,
    image: 'https://images-na.ssl-images-amazon.com/images/I/51BplV3U-CL._SX600_.jpg'
})
productList.push({
    name: 'C4 Extreme',
    price: 395.00,
    image: 'http://cdn.shopify.com/s/files/1/1492/2278/products/c4-extreme-30sv-ibr.jpg?v=1652397847'
})

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

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = "Q. " + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);