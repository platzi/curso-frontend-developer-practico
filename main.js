 const menuEmail = document.querySelector(".navbar-email");
 const desktopMenu = document.querySelector(".desktop-menu");
 const burgerMenu = document.querySelector(".menu");
 const mobileMenu = document.querySelector(".mobile-menu");
 const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
 const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
 const cardsContainer = document.querySelector(".cards-container")
 const productDetailContainer = document.querySelector("#productDetail");
 const productDetailCloseIcon = document.querySelector(".product-detail-close");



 menuEmail.addEventListener("click", toggleDesktopMenu);
 burgerMenu.addEventListener("click", toggleMobileMenu);
 menuCarritoIcon.addEventListener("click", toggleCarritoshoppingCartContainer);
 productDetailCloseIcon.addEventListener("click", closeProductDetailAside);
 

 function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");

    if (!shoppingCartContainer.classList.contains("inactive")) {
        shoppingCartContainer.classList.toggle("inactive");
    } 
    if (!productDetailContainer.classList.contains("inactive")) {
        productDetailContainer.classList.add("inactive");
    }
 }

 function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");

    if (!shoppingCartContainer.classList.contains("inactive")) {
        shoppingCartContainer.classList.toggle("inactive");
    }   
    if (!productDetailContainer.classList.contains("inactive")) {
        productDetailContainer.classList.add("inactive");
    }
 }

 function toggleCarritoshoppingCartContainer() {
    shoppingCartContainer.classList.toggle("inactive");

    if (!mobileMenu.classList.contains("inactive")) {
        mobileMenu.classList.toggle("inactive");
    }
    if (!desktopMenu.classList.contains("inactive")) {
        desktopMenu.classList.toggle("inactive");
    }
    if (!productDetailContainer.classList.contains("inactive")) {
        productDetailContainer.classList.toggle("inactive");
    }
 }

 function openProductDetailAside() {
    productDetailContainer.classList.remove("inactive");

    if (!shoppingCartContainer.classList.contains("inactive")) {
        shoppingCartContainer.classList.toggle("inactive");
    }   
    if (!mobileMenu.classList.contains("inactive")) {
        mobileMenu.classList.toggle("inactive");
    }
    if (!desktopMenu.classList.contains("inactive")) {
        desktopMenu.classList.toggle("inactive");
    }
 }

 function closeProductDetailAside() {
    productDetailContainer.classList.add("inactive");

 }

 const productList = [];
 productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
 }); 
 productList.push({
    name: "Pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
 });
 productList.push({
    name: "Computadora",
    price: 620,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
 });

 function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetailAside);
        
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
    
        const productName = document.createElement("p");
        productName.innerText = product.name;
        
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
     }
 }

 renderProducts(productList);