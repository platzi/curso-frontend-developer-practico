const productData = [
    {
        productImg: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        productPrice: "$120,00",
        productName: "Bike",
    },
    {
        productImg: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        productPrice: "$120,00",
        productName: "Bike",
    },
    {
        productImg: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        productPrice: "$120,00",
        productName: "Bike",
    },
    {
        productImg: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        productPrice: "$120,00",
        productName: "Bike",
    },
    {
        productImg: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        productPrice: "$120,00",
        productName: "Bike",
    },
    {
        productImg: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        productPrice: "$120,00",
        productName: "Bike",
    },
    {
        productImg: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        productPrice: "$120,00",
        productName: "Bike",
    },
    {
        productImg: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        productPrice: "$120,00",
        productName: "Bike",
    },
    {
        productImg: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        productPrice: "$120,00",
        productName: "Bike",
    },
    {
        productImg: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        productPrice: "$120,00",
        productName: "Bike",
    }
]

let navbarEmail = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");
let mobileIconMenu = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu");
let navbarShoppingCart = document.querySelector(".navbar-shopping-cart");
let asideProductDetailMenu = document.querySelector(".product-detail");
let productsCardContainer = document.querySelector(".cards-container");


function createElementDiv(classes){
    let div = document.createElement("div");
    for (const iterator of classes) {
        div.classList.add(iterator)
    }
    return div;
}
function createElementImg(src){
    let img = document.createElement("img");
    img.setAttribute("src",src);
    img.setAttribute("alt","");
    return img;
}
function createElementP(text){
    let p = document.createElement("p");
    p.innerText = text;
    return p;
}

function createProduct(prodcutData){
        let product = this.createElementDiv(["product-card"])
        let productImg = this.createElementImg(prodcutData.productImg);
        let productInfoContainer = this.createElementDiv(["product-info"]);
        let productInfo = document.createElement("div");
        let productPrice = this.createElementP(prodcutData.productPrice);
        let productName = this.createElementP(prodcutData.productName);
        let addToCartIconContainer = document.createElement("figure");
        let addToCartIcon = this.createElementImg("./icons/bt_add_to_cart.svg");

        // productInfo.appendChild(productPrice)
        // productInfo.appendChild(productName)
        productInfo.append(productPrice,productName)
        addToCartIconContainer.appendChild(addToCartIcon)
        // productInfoContainer.appendChild(productInfo)
        // productInfoContainer.appendChild(addToCartIconContainer)
        productInfoContainer.append(productInfo,addToCartIconContainer)
        // product.appendChild(productImg);
        // product.appendChild(productInfoContainer);
        product.append(productImg,productInfoContainer)

        return product;
}

function rednerProducts(productsArray){
    for (const iterator of productsArray) {
        productsCardContainer.appendChild(createProduct(iterator)); 
    }
}


function toggleEmailMenu() {
    desktopMenu.classList.toggle("inactive") 
    asideProductDetailMenu.classList.contains("inactive") == false ? asideProductDetailMenu.classList.add("inactive") : ''
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive") 
    asideProductDetailMenu.classList.contains("inactive") == false ? asideProductDetailMenu.classList.add("inactive") : ''

}

function toggleAsideProductDetailMenu() {
    if(asideProductDetailMenu.classList.contains("inactive") ){
        if (! mobileMenu.classList.contains("inactive")){
            mobileMenu.classList.add("inactive") 
        }
        if(! desktopMenu.classList.contains("inactive")){
            desktopMenu.classList.add("inactive") 
        }
    }
    asideProductDetailMenu.classList.toggle("inactive") 
}

navbarEmail.addEventListener('click',toggleEmailMenu)
desktopMenu.addEventListener('mouseout',toggleEmailMenu)
mobileIconMenu.addEventListener('click',toggleMobileMenu)
navbarShoppingCart.addEventListener('click',toggleAsideProductDetailMenu)

rednerProducts(productData);