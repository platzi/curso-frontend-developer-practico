const menuEmail = document.querySelector (".navbar-email");
const desktopMenu = document.querySelector (".desktop-menu");
const menuCarritoIcon = document.querySelector (".navbar-shopping-cart");
const menuBurguerIcon = document.querySelector (".menu");
const productDetailCloseIcon = document.querySelector (".product-detail-close");
const mobileMenu = document.querySelector (".mobile-menu");
const orderAside = document.querySelector (".order-detail");
const cardsContainer = document.querySelector (".cards-container");
const productAside = document.querySelector (".product-detail");


const productList = [];

function openProductDetailAside () {
    orderAside.classList.add ("inactive");
    mobileMenu.classList.add ("inactive");
    desktopMenu.classList.add ("inactive");
    productAside.classList.remove ("inactive");
}

function closeProductDetailAside (){
    productAside.classList.add ("inactive");
}

function toggleDesktopMenu () {
    const isOrderAsideClosed = orderAside.classList.contains ("inactive")
    const isProductDetailClosed = productAside.classList.contains ("inactive")
    
    if (!isOrderAsideClosed){
        orderAside.classList.add ("inactive");
    } else if (!isProductDetailClosed){
        productAside.classList.add ("inactive");
    }

    desktopMenu.classList.toggle ("inactive");
}

function toggleMobileMenu () {
    const isOrderAsideClosed = orderAside.classList.contains ("inactive")
    const isProductDetailClosed = productAside.classList.contains ("inactive")
    
    if (!isOrderAsideClosed){
        orderAside.classList.add ("inactive");
    } 

    closeProductDetailAside ()
    mobileMenu.classList.toggle ("inactive");
}

function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains ("inactive")
    const isDesktopMenuClosed = desktopMenu.classList.contains ("inactive")
    const isProductDetailClosed = productAside.classList.contains ("inactive")

    if (!isMobileMenuClosed){
        mobileMenu.classList.add ("inactive");
    } else if (!isDesktopMenuClosed){
        desktopMenu.classList.add ("inactive");
    } else if (!isProductDetailClosed){
        productAside.classList.add ("inactive");
    }
    
    orderAside.classList.toggle ("inactive");
}


menuEmail.addEventListener ("click", toggleDesktopMenu);
menuBurguerIcon.addEventListener ("click", toggleMobileMenu);
menuCarritoIcon.addEventListener ("click", toggleCarritoAside);
productDetailCloseIcon. addEventListener ("click", closeProductDetailAside);



productList.push ({
    name: "Bolso redondo 1",
    price: "60.000",
    image: "https://i.pinimg.com/564x/34/78/7b/34787b4496b8e5d2eb302ee55e2e0c9e.jpg"
});

productList.push ({
    name: "Bolso ojo turco",
    price: "70.000",
    image: "https://i.pinimg.com/564x/b6/81/4e/b6814ea998d8bdec0f2ee532adaa4fd4.jpg"
});

productList.push ({
    name: "bolso redondo 2",
    price: "60.000",
    image: "https://i.pinimg.com/564x/dc/8f/49/dc8f4944752ac23e9032e20a1288e2ed.jpg"
});

productList.push ({
    name: "Llavero corazón",
    price: "8.000",
    image: "https://i.pinimg.com/564x/12/d1/c2/12d1c26b42e2b6ffb0c543288ae7a9f8.jpg"
});

productList.push ({
    name: "Bolso rectangular",
    price: "70.000",
    image: "https://i.pinimg.com/564x/1f/c0/19/1fc0192df15e863714812ce22eda3529.jpg"
});

productList.push ({
    name: "Llavero ojo turco",
    price: "5.000",
    image: "https://i.pinimg.com/564x/14/c4/66/14c466a0b49310414c4acbb72f248f88.jpg"
});

productList.push ({
    name: "Mochila",
    price: "130.000",
    image: "https://i.pinimg.com/564x/77/d4/fe/77d4fe3deb5fa390f972594bd25b18be.jpg"
});

productList.push ({
    name: "Bolso grande",
    price: "120.000",
    image: "https://i.pinimg.com/564x/42/b3/53/42b35319c59de8ed7211566452a5d010.jpg"
});


function renderProducts (arr){
    for (product of arr) {
        const productCard = document.createElement ("div");
        productCard.classList.add ("product-card");
    
        const productImg = document.createElement ("img");
        productImg.setAttribute ("src", product.image);
        productImg.addEventListener ("click", openProductDetailAside)
    
        const productInfo = document.createElement ("div");
        productInfo.classList.add ("product-info");
    
        const productInfoDiv = document.createElement ("div");
    
        const productPrice = document.createElement ("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement ("p");
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement ("figure");
        const productImgCard = document.createElement ("img");
        productImgCard.setAttribute ("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild (productImgCard);
    
        productInfoDiv.appendChild (productPrice);
        productInfoDiv.appendChild (productName);
    
        productInfo.appendChild (productInfoDiv);
        productInfo.appendChild (productInfoFigure);
    
        productCard.appendChild (productImg);
        productCard.appendChild (productInfo);
        
        cardsContainer.appendChild (productCard);
    }
}

renderProducts (productList);







