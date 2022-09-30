const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.getElementById('shopping-cart-container');

//Seleccion del card container clase 21
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

//Clase 21
const productList = [];

//Agregamos productos ficticios al array
productList.push({
    name: "Bike",
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: "Joistyck",
    price: 1020,
    image: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdhbWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
});
productList.push({
    name: "Phones",
    price: 9999,
    image: "https://images.unsplash.com/photo-1636036769389-343bb250f013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGdhbWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
});
productList.push({
    name: "Keyboard",
    price: 19999,
    image: "https://images.unsplash.com/photo-1614149484421-dcd8185578cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGdhbWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
});

//Recorrer e insertar los productos mediante una funcion
function renderProducts(array) {
    for (product of productList) {

        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const productInfoDiv = document.createElement("div");

        const productPrice = document.createElement("p");
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement("p");
        productName.innerHTML = product.name;

        const productInfoFigure = document.createElement("figure");

        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

        //Agregamos los elemento al HTML
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);