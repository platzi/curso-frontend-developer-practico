const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cardsContainer = document.querySelector(".cards-container");
const productDetailAside = document.querySelector("#productDetail");
const productDetailCartImg = document.querySelector(".product-detail-close");

menuEmail.addEventListener(`click`, toggleDesktopMenu);
menuHamIcon.addEventListener(`click`, toggleMobileMenu);
menuCarritoIcon.addEventListener(`click`, toggleMenuCarritoIcon)
productDetailCartImg.addEventListener(`click`, closeProductDetailAside);

function openProductDetailAside() {    
    productDetailAside.classList.remove("inactive")

    shoppingCartContainer.classList.add("inactive")
};

function closeProductDetailAside() {
    productDetailAside.classList.add("inactive")
};

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains(`inactive`);

    if(!isAsideClosed) {
        shoppingCartContainer.classList.add(`inactive`);
    }

    desktopMenu.classList.toggle(`inactive`);  //de esta manera no tiene que repetirse un click de mas al principio para que empiece a alternar como la opcion de abajo


    // if(desktopMenu.style.display == "block") {
    // desktopMenu.style.display = "none";
    // } else {
    //     desktopMenu.style.display = "block";
    // }
};

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains(`inactive`);

    if(!isAsideClosed) {
        shoppingCartContainer.classList.add(`inactive`);
    }

    closeProductDetailAside()

    mobileMenu.classList.toggle(`inactive`);
}

function toggleMenuCarritoIcon() {
    const isMobileMenuClosed = mobileMenu.classList.contains(`inactive`);
    const isDesktopMenuClosed = desktopMenu.classList.contains(`inactive`);

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add(`inactive`);
    } else if(!isDesktopMenuClosed) {
        desktopMenu.classList.add(`inactive`)
    }

    const isProductDetailClosed = productDetailAside.classList.contains("inactive");

    if(!isProductDetailClosed) {
        productDetailAside.classList.add(`inactive`)
    }

    shoppingCartContainer.classList.toggle(`inactive`)
}

const products = [];
products.push({
    name: "Tabletas",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: 890
}) ;

products.push({
    name: "Computadoras",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: 645
});

products.push({
    name: "Pasajes",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: 1200
});

products.push({
    name: "Peru",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: 650
});

products.push({
    name: "Albino",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: 1500
});

products.push({
    name: "Spain",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: 15
});


    // <div class="product-card">
    //     <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?  auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    //     <div class="product-info">
    //       <div>
    //         <p>$120,00</p>
    //         <p>Bike</p>
    //       </div>
    //       <figure>
    //         <img src="./icons/bt_add_to_cart.svg" alt="">
    //       </figure>
    //     </div>
    //   </div>;


function renderList(arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        
    
        const productImage = document.createElement("img");
        productImage.setAttribute("src", product.image);
        productImage.addEventListener(`click`, openProductDetailAside);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
    
        const productName = document.createElement("p");
        productName.innerText = product.name;
        
        
        const figure = document.createElement("figure");
        
        const cartImage = document.createElement("img");
        cartImage.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(figure);
        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productPrice);
    
        figure.appendChild(cartImage)
    
    
        cardsContainer.appendChild(productCard);
    }
}

renderList(products)