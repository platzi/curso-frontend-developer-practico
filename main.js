const menuemail = document.querySelector(".navbar-email")
const DesktopMenu = document.querySelector(".desktop-menu")
const MenuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const productDetailCloseIcon = document.querySelector(".product-detail-close")
const MenuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCartContainer = document.querySelector("#shoppingCartContainer")
const productDetailContainer = document.querySelector("#productDetail")
const cardsContainer = document.querySelector(".cards-container")

menuemail.addEventListener("click" , toggleDesktopMenu)
MenuHamIcon.addEventListener("click" , toggleMobileMenu)
MenuCarritoIcon.addEventListener("click" , toggleCarritoAside)
productDetailCloseIcon.addEventListener("click" , closeProductDetailAside)

function toggleDesktopMenu () {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive")

    if(!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive")
    }
    DesktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu () {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive")

    if(!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive")
    }

    closeProductDetailAside()

    mobileMenu.classList.toggle("inactive")
}

function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive")
   
    if(!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive")
    }
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive")
   
    if(!isProductDetailClosed) {
        shoppingCartContainer.classList.add("inactive")
        productDetailContainer.classList.add("inactive")
    }

    shoppingCartContainer.classList.toggle("inactive")
}

function openProductDetailAside () {
    productDetailContainer.classList.remove("inactive")
}

function closeProductDetailAside () {
    productDetailContainer.classList.add("inactive")
}
const productList = []
 productList.push({
    Name: "Bike",
    Price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    Name: "Pantalla",
    Price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    Name: "Compu",
    Price: 620,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

function renderProducts (arr) {
    for (product of arr) {

        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetailAside)
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.Price;
    
        const productName = document.createElement("p");
        productName.innerText = product.Name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("Img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts (productList);