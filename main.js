const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHumIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container")
const productDetailContainer = document.querySelector("#productDetail")
const productDetailClose = document.querySelector(".product-detail-close")

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHumIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailClose.addEventListener("click", closeProductDetailAside);

// funciones para ocultar y mostrar menus
function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive')
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive')
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }
    
    shoppingCartContainer.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive')
}

function openProductDetailAside() {
        productDetailContainer.classList.remove('inactive')
        mobileMenu.classList.add('inactive')
        desktopMenu.classList.add('inactive')
        shoppingCartContainer.classList.add('inactive')
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')
}




//renderizar productos ----------------------
const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://source.unsplash.com/xwBZl79AJBo"
})
productList.push({
    name: "Pantalla",
    price: 220,
    image: "https://source.unsplash.com/rmHTCPXUk9g"
})
productList.push({
    name: "Compu",
    price: 620,
    image: "https://source.unsplash.com/_qOf3MkCrhk"
})

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        
        const productImg = document.createElement("img") 
        productImg.setAttribute("src", product.image)
        productImg.addEventListener("click", openProductDetailAside);
        
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")
        
        const productInfoDiv = document.createElement("div");
        
        const productPrice = document.createElement("p")
        productPrice.innerText = "$ " + product.price;
        const productName = document.createElement("p")
        productName.innerText = product.name;
        
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
        
        const productInfoFigure = document.createElement("figure")
        
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg" )
        
        productInfoFigure.appendChild(productImgCart)
        
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
        
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)



