const menuEmail = document.querySelector (".navbar-email");
const desktopMenu = document.querySelector (".desktop-menu");
const menuCarritoIcon = document.querySelector (".navbar-shopping-cart");
const menuHamIcon = document.querySelector (".menu");
const mobileMenu = document.querySelector (".mobile-menu");
const aside = document.querySelector (".product-detail");
const cardsContainer = document.querySelector (".cards-container");

menuEmail.addEventListener ("click", toggleDesktopMenu);
menuHamIcon.addEventListener ("click", toggleMobileMenu);
menuCarritoIcon.addEventListener ("click", toggleCarritoAside);

function toggleDesktopMenu () {
    const isAsideColsed = aside.classList.contains ("inactive");

    if (!isAsideColsed) {
        aside.classList.add ("inactive");
    }

    desktopMenu.classList.toggle ("inactive")
}

function toggleMobileMenu () {
    const isAsideColsed = aside.classList.contains ("inactive");

    if (!isAsideColsed) {
        aside.classList.add ("inactive");
    }

    mobileMenu.classList.toggle ("inactive");
}

function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains ("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains ("inactive");

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add ("inactive");
    }

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add ("inactive");
    }
    
    aside.classList.toggle ("inactive")
}

const productList = [];
productList.push ({
    name: 'Bike',
    Price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name: 'TV',
    Price: 220,
    Image: 'https://assets.sams.com.mx/image/upload/f_auto,q_auto:eco,w_350,c_scale,dpr_auto/mx/images/product-images/img_large/980000170l.jpg'
});
productList.push ({
    name: 'Computer',
    Price: 620,
    Image: 'https://i.dell.com/sites/imagecontent/merchandizing/PublishingImages/xps_8900.png'
});

function renderProducts (arr) {
for (product of productList) {

   const productCard = document.createElement ('div');
   productCard.classList.add ('product-card');

   const productImg = document.createElement ("img") 
   productImg.setAttribute ('src', product.Image);
   
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