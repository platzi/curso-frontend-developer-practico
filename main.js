/*Agregando y quitando mi DesktopMenu*/
const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

navbarEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
    aside.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");
}

/*Agregando y quitando mi mobileMenu*/
const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

burguerMenu.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
    const isAsiadeClosed = aside.classList.contains("inactive");
    if (!isAsiadeClosed) {
        aside.classList.add("inactive")
    }
    mobileMenu.classList.toggle("inactive")
}

/*Agregando y quitando el Aside*/
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

shoppingCart.addEventListener("click", toggleAside);

function toggleAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive")
    }
    aside.classList.toggle("inactive");
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


/*<div class="product-card">
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
</div>*/

const cardsContainer = document.querySelector(".cards-container");

function renderProducts(arr) {
    for (product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const img = document.createElement("img");
        img.setAttribute("src", product.img);
    
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
