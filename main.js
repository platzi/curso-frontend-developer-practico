const navbaremail = document.querySelector(".navbar-email");
const desktopmenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobilemenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productdetailcloseicon = document.querySelector(".product-detail-close")
const shoppingcartcontainer = document.querySelector("#shoppingcartcontainer");
const cardsContainer = document.querySelector(".cards-container");
const productdetailcontainer = document.querySelector("#productdetail");

navbaremail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productdetailcloseicon.addEventListener("click", closeproductdetailaside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingcartcontainer.classList.contains("inactive");

    if (!isAsideClosed) {
        shoppingcartcontainer.classList.add("inactive");
    }

    desktopmenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingcartcontainer.classList.contains("inactive");

    if (!isAsideClosed) {
        shoppingcartcontainer.classList.add("inactive");
    }

    closeproductdetailaside();

    mobilemenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
    const isMobileClosed = mobilemenu.classList.contains("inactive");

    if (!isMobileClosed) {
        mobilemenu.classList.add("inactive");
    }

    const isDesktopMenuClosed = desktopmenu.classList.contains("inactive");

    if (!isDesktopMenuClosed) {
        desktopmenu.classList.add("inactive");
    }

    const isproductdetailClosed = productdetailcontainer.classList.contains("inactive");

    if (!isproductdetailClosed) {
        productdetailcontainer.classList.add("inactive");
    }
    
    shoppingcartcontainer.classList.toggle("inactive");

}

function openproductdetalaside() {
    shoppingcartcontainer.classList.add("inactive");

    productdetailcontainer.classList.remove("inactive");
}

function closeproductdetailaside() {
    productdetailcontainer.classList.add("inactive")
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Pantalla",
    price: 320,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Computer",
    price: 820,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Pantalla",
    price: 320,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Computer",
    price: 820,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(arr) {
    for (product of productList) {
        const productcard = document.createElement("div");
        productcard.classList.add("product-card");
    
        const productimg = document.createElement("img");
        productimg.setAttribute("src", product.image);
        productimg.addEventListener("click", openproductdetalaside);
    
        const productinfo = document.createElement("div");
        productinfo.classList.add("product-info");
    
        const productinfodiv = document.createElement("div");
    
        const productprice = document.createElement("p");
        productprice.innerText = "$" + product.price;
    
        const productname = document.createElement("p");
        productname.innerText = product.name;
    
        productinfodiv.appendChild(productprice);
        productinfodiv.appendChild(productname);
    
        const productinfofigure = document.createElement("figure");
        
        const productimgcart = document.createElement("img");
        productimgcart.setAttribute("src", "./icons/bt_add_to_cart.svg" )
    
        productinfofigure.appendChild(productimgcart);
    
        productinfo.appendChild(productinfodiv);
        productinfo.appendChild(productinfofigure);
    
        productcard.appendChild(productimg);
        productcard.appendChild(productinfo);
    
        cardsContainer.appendChild(productcard);
    }
};

renderProducts(productList);