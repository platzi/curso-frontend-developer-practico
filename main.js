const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu"); 
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");

const cardsContainer = document.querySelector(".cards-container");  

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);


function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if(!isAsideClosed){
        shoppingCartContainer.classList.add("inactive");
    };
    desktopMenu.classList.toggle("inactive");
};

function toggleMobileMenu(){
    
    closeProductDetailAside();
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if(!isAsideClosed){
        shoppingCartContainer.classList.add("inactive")
    }

    

    mobileMenu.classList.toggle("inactive"); /*hacemos llamado al atributo inactive que es display none,
    si no esta el menu, hacemos con toggle desactivar el inactive, osea quitar el display none*/
};

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    //const isDesktoplMenuClosed = desktopMenu.classList.contains("inactive");

    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }

    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");

    if(!isProductDetailClosed){
        productDetailContainer.classList.add("inactive");
    }    

    //if(!isDesktoplMenuClosed){
      //desktopMenu.classList.add("inactive");
    //};
    //aside.classList.toggle("inactive");

    shoppingCartContainer.classList.toggle("inactive");
};

function openProductDetailAside() {
    shoppingCartContainer.classList.add("inactive");

    productDetailContainer.classList.remove("inactive");
};

function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive");
};
//test

const productlist = [];
productlist.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productlist.push({
    name: "Computer",
    price: 1120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productlist.push({
    name: "Scooter",
    price: 520,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(arr){
    for (product of arr){
        const productcard =  document.createElement("div");
        productcard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetailAside); //llamamos a un listener del click en la imagen
    
        const productInfo =  document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice); //agrega como hijos del producinfoDiv al productprive y productname
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productcard.appendChild(productImg);
        productcard.appendChild(productInfo);
    
        cardsContainer.appendChild(productcard);
    
    };
}

renderProducts(productlist);

