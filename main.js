const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")

const iconMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const asideProductDetail = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");

const cardsContainer = document.querySelector(".cards-container");

navEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside)

function toggleDesktopMenu(){
    const isAsideClosed = asideProductDetail.classList.contains('inactive');
    
    if(!isAsideClosed){
        asideProductDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = asideProductDetail.classList.contains('inactive');
    
    if(!isAsideClosed){
        asideProductDetail.classList.add('inactive');
    }
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    //Si posee la clase inactive , esta oculto
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    //Si mobileMenu esta open, hay que cerrarlo
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if(!isProductDetailClosed){
        productDetailContainer.classList.add("inactive")
    }

    asideProductDetail.classList.toggle('inactive');
}

const productsList = [];
productsList.push( {
    name: "Bike",
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
} );
productsList.push( {
    name: "Moto",
    price: 1000,
    img: "https://i.pinimg.com/originals/71/d7/ba/71d7ba74879bff474478b884a03146b8.jpg"
} );
productsList.push( {
    name: "Auto",
    price: 3000,
    img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Aventador/6721/Lamborghini-Aventador-SVJ/1621849426405/front-left-side-47.jpg"
} );

function renderProducts(arrayProducts){
    for(product of arrayProducts){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const img = document.createElement("img");
        img.setAttribute("src",product.img);
        
        img.addEventListener('click', openProductDetailAside);

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
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src","./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productsList);

function openProductDetailAside(){
    asideProductDetail.classList.add("inactive");
    productDetailContainer.classList.remove("inactive");
}
function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive");
}