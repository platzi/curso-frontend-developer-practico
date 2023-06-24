const menuEmail = document.querySelector(".navbar-email"); 
const desktopMenu = document.querySelector(".desktop-menu"); 
const navbarShoppingCart = document.querySelector(".navbar-shopping-cart");      

const hamIconMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");   
const productDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
hamIconMenu.addEventListener("click", toggleMobileMenu);
navbarShoppingCart.addEventListener("click", toggleProductDetail);


function toggleDesktopMenu () {
    const isProductDetailclose =  productDetail.classList.contains("inactive");

    desktopMenu.classList.toggle("inactive");
   
    if (!isProductDetailclose) {
        productDetail.classList.add("inactive");
    }
}

function toggleMobileMenu () {
   const isProductDetailclose =  productDetail.classList.contains("inactive");

    mobileMenu.classList.toggle("inactive");
   
    if (!isProductDetailclose) {
        productDetail.classList.add("inactive");
    }
}

function toggleProductDetail () {
    const ismobileMenuClose =  mobileMenu.classList.contains("inactive");

    productDetail.classList.toggle("inactive");
   
    if (!ismobileMenuClose) {
        mobileMenu.classList.add("inactive");
    }
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Tv',
    price: 220,
    image: 'https://images.samsung.com/is/image/samsung/hk-en_UA55JS8000JXZK_017_Silver_silver?$L1-Thumbnail$'
});

productList.push({
    name: 'ps5',
    price: 500,
    image: 'http://blurredculture.com/wp-content/uploads/2020/09/ps5.jpg'
});


function renderProducts (arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image)
        
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
     
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
        const productInfoFigure = document.createElement("figure");
        const productImgCard = document.createElement("img");
        productImgCard.setAttribute("srec", "./icons/bt_add_to_cart.svg" )
        
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
};

renderProducts (productList);