const $ = (selector) => document.querySelector(selector);

const menuOpt = $(".desktop-menu");
const navRight = $(".navbar-email");
const burgerMenu = $(".burgerMenu");
const menuMobile = $(".mobile-menu");
const cart = $(".navbar-shopping-cart");
const cartList = $(".product-detail");
const cardsContainer = $(".cards-container");

// Events
const clickOptGral = navRight.addEventListener("click", toggleMenu);
const clickOptMob = burgerMenu.addEventListener("click", toggleMenuMobile);
const clickCartGral = cart.addEventListener("click", toggleCart);

// ItemsList
const productsList = [];
productsList.push({
    name: 'Carro',
    price: 110,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
});
productsList.push({
    name: 'Casa de juguete',
    price: 500,
    image: 'https://images.unsplash.com/photo-1605012464390-45820d1f7bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
});
productsList.push({
    name: 'Teléfono',
    price: 1000,
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80'
});
productsList.push({
    name: 'Carro',
    price: 110,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
});
productsList.push({
    name: 'Casa de juguete',
    price: 500,
    image: 'https://images.unsplash.com/photo-1605012464390-45820d1f7bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
});
productsList.push({
    name: 'Teléfono',
    price: 1000,
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80'
});
productsList.push({
    name: 'Carro',
    price: 110,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
});
productsList.push({
    name: 'Casa de juguete',
    price: 500,
    image: 'https://images.unsplash.com/photo-1605012464390-45820d1f7bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
});
productsList.push({
    name: 'Teléfono',
    price: 1000,
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80'
});

for (product of productsList){
    // Creating all elements
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image)

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    const iconFigure = document.createElement('figure');

    const icon = document.createElement('img');
    icon.setAttribute('src', './icons/bt_add_to_cart.svg');

    // Appending all elements to create the card.
    // Ref: 
    /* <div class="product-card">
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
    </div>
    */
    iconFigure.append(icon);
    productInfoDiv.append(productPrice, productName);
    productInfo.append(productInfoDiv, iconFigure);
    productCard.append(productImg, productInfo);
    cardsContainer.appendChild(productCard);
}

function toggleMenu(){
    !menuOpt.hasAttribute("hidden") ? menuOpt.setAttribute("hidden", "") : menuOpt.removeAttribute("hidden");
    menuMobile.setAttribute("hidden", "");
    cartList.setAttribute("hidden", "");
    // menuOpt.classList.toggle('clase'); coloca o quita la clase
}

function toggleMenuMobile(){
    menuMobile.toggleAttribute("hidden");
    cartList.setAttribute("hidden", "");
    menuOpt.setAttribute("hidden", "");
}

function toggleCart(){
    cartList.toggleAttribute("hidden");
    menuMobile.setAttribute("hidden", "");
    menuOpt.setAttribute("hidden", "");
}