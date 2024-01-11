const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menuHamIcon');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productList = [];

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    if (!aside.classList.contains('inactive')) {
        aside.classList.toggle('inactive');
    }
}

function toggleMobileMenu() {
    if (!aside.classList.contains('inactive')) {
        aside.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCartAside() {
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.toggle('inactive');
    } else {
        mobileMenu.classList.toggle('inactive');
    }
    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.toggle('inactive');
    }
    aside.classList.toggle('inactive');
}

productList.push({
    name: "Bike",
    price: 123,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Patineta",
    price: 596,
    image: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/d8488d8f-3a11-4713-a191-e11119ec08fc.f013793d44a5a5150ac1666705abda59.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
});
productList.push({
    name: "Scooter",
    price: 986,
    image: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/2b4153d2-4e23-4dfc-adea-2303e18de463.40463eafdd4659b269ffc5e1c2cfd854.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
});

function renderProducts(productList) {
    for (product of productList) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const imgCard = document.createElement("img");
        imgCard.setAttribute("src", product.image);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const productInfoDiv = document.createElement("div");
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

        productInfoFigure.appendChild(productImgCart);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(imgCard);
        productCard.appendChild(productInfo);
        cardsContainer.append(productCard);
    }
}

renderProducts(productList);