const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const asideCart = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");


navEmail.addEventListener("click", toggleDesktopMenu);

menuHamIcon.addEventListener("click", toggleMobileMenu);

shoppingCart.addEventListener("click", toggleAsideCart);

function toggleDesktopMenu(){
    const isAsideCartClosed = asideCart.classList.contains("inactive");

    if (!isAsideCartClosed){
        asideCart.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");

}

function toggleMobileMenu(){
    const isAsideCartClosed = asideCart.classList.contains("inactive");

    if (!isAsideCartClosed){
        asideCart.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");

}

function toggleAsideCart(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

    if (!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }else if (!isDesktopMenuClosed){
        desktopMenu.classList.add("inactive");
    }

    asideCart.classList.toggle("inactive");
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940,"
});

productList.push({
    name: "Skateboard",
    price: 80,
    image: "https://http2.mlstatic.com/D_NQ_NP_816181-MCO48658198715_122021-V.jpg"
});

productList.push({
    name: "Helmet",
    price: 50,
    image: "https://cdn.skatepro.com/product/440/eight-ball-skate-helmet-3b.jpg"
});

productList.push({
    name: "Hoverboard",
    price: 350,
    image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/132/13221/13221103.jpeg"
});

productList.push({
    name: "Rollerblades",
    price: 100,
    image: "https://m.media-amazon.com/images/I/717zsHVG7GL._AC_SX425_.jpg"
});



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
        const productCard = document.createElement("div");
        productCard.classList.add ("product-card");
        
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add ("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
    
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
        
    
        const productInfoFigure = document.createElement("figure");
    
        const figureImg = document.createElement("img");
        figureImg.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(figureImg);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard)
    
    }
}

renderProducts(productList)