/*Agregando y quitando mi DesktopMenu*/
const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

navbarEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
    asideShoppingCart.classList.add("inactive");
    productDetail.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");
}

/*Agregando y quitando mi mobileMenu*/
const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

burguerMenu.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
    productDetail.classList.add("inactive")
    const isAsiadeClosed = asideShoppingCart.classList.contains("inactive");
    if (!isAsiadeClosed) {
        asideShoppingCart.classList.add("inactive")
    }
    mobileMenu.classList.toggle("inactive")
}

/*Agregando y quitando el Aside*/
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const asideShoppingCart = document.querySelector("#shoppingCartDetail");

shoppingCart.addEventListener("click", toggleAside);

function toggleAside() {
    desktopMenu.classList.add("inactive")
    const isProductDetailClosed = productDetail.classList.contains("inactive")
    if (!isProductDetailClosed) {
        productDetail.classList.add("inactive")
    }

    const isMobileMenuClosed = mobileMenu.classList.contains("inactive")
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive")
    }
    asideShoppingCart.classList.toggle("inactive")
}

/*Agregando y quitando el product Detail*/
const productDetail = document.querySelector("#productDetail");

const imgClose = document.querySelector(".product-detail-close");
imgClose.addEventListener("click", imgCloseIcon);

function imgCloseIcon() {
    productDetail.classList.add("inactive")
}

function productImg() {
    desktopMenu.classList.add("inactive")
    mobileMenu.classList.add("inactive")
    asideShoppingCart.classList.add("inactive")
    productDetail.classList.remove("inactive")
}

/*Agregando Los elementos del Carrito*/
const productList = [];
productList.push({
    name: "Bykes",
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "Lapto",
    price: 450,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "mouse",
    price: 100,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

const cardsContainer = document.querySelector(".cards-container");

function renderProducts(arr) {
    for (product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const img = document.createElement("img");
        img.setAttribute("src", product.img);
        img.addEventListener("click", productImg);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const blockP = document.createElement("div");
    
        const pPrice = document.createElement("p");
        pPrice.innerText = "$" + product.price;
    
        const pName = document.createElement("p");
        pName.innerText = product.name;
    
        const figure = document.createElement("figure");
        const imgFigure = document.createElement("img");
        imgFigure.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
        blockP.appendChild(pPrice);
        blockP.appendChild(pName);
        figure.appendChild(imgFigure);
    
        productInfo.appendChild(blockP);
        productInfo.appendChild(figure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);
