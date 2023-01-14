const menuEmail = document.querySelector (".navbar-email");
const desktopMenu = document.querySelector (".desktop-menu");
const menuCarritoIcon = document.querySelector (".navbar-shopping-cart");
const productDetailCloseicon = document.querySelector (".product-detail-close");
const menuHamIcon = document.querySelector (".menu");
const mobileMenu = document.querySelector (".mobile-menu");
const shoppingCartContainer = document.querySelector ("#shoppingCartContainer");
const cardsContainer = document.querySelector (".cards-container");
const productDetailContainer = document.querySelector ("#productDetail");



menuEmail.addEventListener ("click", toggleDesktopMenu);
menuHamIcon.addEventListener ("click", toggleMobileMenu);
menuCarritoIcon.addEventListener ("click", toggleCarritoAside);
productDetailCloseicon.addEventListener ("click", closeProductDetailAside);

function toggleDesktopMenu () {
    shoppingCartContainer.classList.add ("inactive");
    desktopMenu.classList.toggle ("inactive")
    closeProductDetailAside ();
}

function toggleMobileMenu () {
    shoppingCartContainer.classList.add ("inactive");
    closeProductDetailAside ();
    mobileMenu.classList.toggle ("inactive");
}

function toggleCarritoAside () {
    desktopMenu.classList.add ("inactive");
    productDetailContainer.classList.add ("inactive");
    mobileMenu.classList.add ("inactive");
    shoppingCartContainer.classList.toggle ("inactive");
}

function openProductDetailAside () {
    shoppingCartContainer.classList.add ("inactive");
    productDetailContainer.classList.remove ("inactive");
    desktopMenu.classList.add ("inactive");
}

function closeProductDetailAside () {
    productDetailContainer.classList.add ("inactive")
}

const productList = [];
productList.push ({
    name: 'Bike',
    Price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name: 'Bike',
    Price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name: 'Bike',
    Price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name: 'Bike',
    Price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name: 'Bike',
    Price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name: 'Bike',
    Price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name: 'Bike',
    Price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name: 'Bike',
    Price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name: 'Bike',
    Price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name: 'Bike',
    Price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name: 'Bike',
    Price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name: 'Bike',
    Price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts (arr) {
for (product of productList) {

   const productCard = document.createElement ('div');
   productCard.classList.add ('product-card');

   const productImg = document.createElement ("img") 
   productImg.setAttribute ('src', product.Image);
   productImg.addEventListener ('click', openProductDetailAside);
   
   const productInfo = document.createElement ('div');
   productInfo.classList.add ('product-info');

   const productInfoDiv = document.createElement ('div');

   const productPrice = document.createElement ('p');
   productPrice.innerText = '$' + product.Price;

   const productName = document.createElement ('p');
   productName.innerText = '$' + product.name; 

   productInfoDiv.appendChild (productPrice);
   productInfoDiv.appendChild (productName);

   const productInfoFigure = document.createElement ('figure');
   const productImgCart = document.createElement ('img');
   productImgCart.setAttribute ('src', './icons/bt_add_to_cart.svg');

   productInfoFigure.appendChild (productImgCart);
   
   productInfo.appendChild (productInfoDiv);
   productInfo.appendChild (productInfoFigure);

   productCard.appendChild (productImg);
   productCard.appendChild (productInfo);

   cardsContainer.appendChild (productCard);
}    
}

renderProducts(productList);