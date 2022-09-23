const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamburguesa = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carritoCompras = document.querySelector(".navbar-shopping-cart");
const agregadoAlCarrito = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");
const productsList = [];
const productDetailOn = document.querySelector(".product-detail-on");

productsList.push({
    name: "Bici",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productsList.push({
    name: "Laptop",
    price: 120,
    image: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?cs=srgb&dl=pexels-tuur-tisseghem-812264.jpg&fm=jpg"
});
productsList.push({
    name: "Phone",
    price: 120,
    image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?cs=srgb&dl=pexels-jess-bailey-designs-788946.jpg&fm=jpg"
});


function desplegarMenu(elemento){
    elemento.classList.toggle("inactive");

    if(elemento === desktopMenu){
        mobileMenu.classList.add("inactive");
        agregadoAlCarrito.classList.add("inactive");
    }
    else if(elemento === mobileMenu){
        desktopMenu.classList.add("inactive");
        agregadoAlCarrito.classList.add("inactive");
    }
    else if(elemento === agregadoAlCarrito){
        desktopMenu.classList.add("inactive");
        mobileMenu.classList.add("inactive");
    }
}
menuEmail.addEventListener("click", function(){desplegarMenu(desktopMenu)});
menuHamburguesa.addEventListener("click", function(){desplegarMenu(mobileMenu)});
carritoCompras.addEventListener("click", function(){desplegarMenu(agregadoAlCarrito)});


for(product of productsList){
    
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image)

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = "$ " + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productFigure = document.createElement('figure');
    const imgFigure = document.createElement('img');
    imgFigure.setAttribute('src', './icons/bt_added_to_cart.svg');

    productFigure.appendChild(imgFigure);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}

