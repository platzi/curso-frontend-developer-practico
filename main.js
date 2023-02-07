const touchEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const menuBurguer = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

touchEmail.addEventListener("click", toggletouchEmail);
menuBurguer.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggletouchEmail(){
    const isAsideClosed = aside.classList.contains("inactive");

    if (!isAsideClosed) {
        aside.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains("inactive");

    if (!isAsideClosed) {
        aside.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
            
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }
        aside.classList.toggle("inactive");
}

const productList = [];
productList.push({
    name: "Bike",
    price: 100,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Xbox Series S",
    price: 299,
    image: "https://images.pexels.com/photos/12410982/pexels-photo-12410982.jpeg?auto=compress&cs=tinysrgb&w=300",
});
productList.push({
    name: "PlayStation 5",
    price: 399,
    image: "https://images.pexels.com/photos/13189272/pexels-photo-13189272.jpeg?auto=compress&cs=tinysrgb&w=300",
});
productList.push({
    name: "Lamborghini",
    price: 179000,
    image: "https://images.pexels.com/photos/6462662/pexels-photo-6462662.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name: "Yate",
    price: 1200000,
    image: "https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=300",
});

/*SOLO POR TENER EL FOR ORDENADO NO ES OBLIACION METERLO EN UNA FUNCION*/

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice);
        productInfoDiv.append(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.append(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);