
console.log("Hola")
const $ = (selector) => document.querySelector(selector);
const navEmail = $(`.navbar-email`);
const desktopMenu = $(`.desktop-menu`);
const menuHam = $(`.menu`)
const mobileMenu = $(`.mobile-menu`)
const menuCar = $(`.navbar-shopping-cart`)
const shoppingCartContainer = $(`#shoppingCartContainer`)

navEmail.addEventListener(`click`, toggleDesktopMenu);
menuHam.addEventListener(`click`, toggleMobileMenu);
menuCar.addEventListener(`click`, toggleAsideCar);

function toggleDesktopMenu( ) {
    const isAsideClosed = shoppingCartContainer.classList.contains(`inactive`);
    if (!isAsideClosed)
    {
        shoppingCartContainer.classList.add(`inactive`)
    }
    desktopMenu.classList.toggle(`inactive`);
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains(`inactive`);
    if (!isAsideClosed)
    {
        shoppingCartContainer.classList.add(`inactive`)
    }
    mobileMenu.classList.toggle(`inactive`);
}

function toggleAsideCar(){
    const isMobileMenuClosed = mobileMenu.classList.contains(`inactive`);
    const isDesktopMenuClosed = desktopMenu.classList.contains(`inactive`)

    if (!isDesktopMenuClosed) { desktopMenu.classList.add(`inactive`);
    
    }
    if (!isMobileMenuClosed) {
            mobileMenu.classList.add(`inactive`);
        }
        shoppingCartContainer.classList.toggle(`inactive`);
    }

const productList = [];
productList.push({
    name:`Bike`,
    price: 120,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
});
productList.push({
    name:`Computer`,
    price: 350,
    image: `https://th.bing.com/th/id/OIP.h9WJz0dGnswsZRtezWX-zwHaFj?w=257&h=193&c=7&r=0&o=5&pid=1.7`
});
productList.push({
    name:`Table`,
    price: 100,
    image: `https://th.bing.com/th/id/OIP.7JSUCfWwjkpewJwd6xezpwHaEp?w=310&h=195&c=7&r=0&o=5&pid=1.7`
});
productList.push({
    name:`Tv`,
    price: 250,
    image: `https://th.bing.com/th/id/OIP.JqOcV3CQFg1MFN-qfLHh_AHaF-?w=228&h=184&c=7&r=0&o=5&pid=1.7`
});
/*
<div class="product-card">
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

/*for (product of productList) {
    console.log(product.name)
}
for (product in productList) {
    console.log(product)
}*/
function renderProducts(arr){
for (product of arr){
    const productCard = document.createElement(`div`);
    productCard.classList.add(`product-card`)

    const productImg = document.createElement(`img`)
    productImg.setAttribute(`src`, product.image);
    //product={name,price, image -> product.image}
    
    const productInfo = document.createElement(`div`);
    productInfo.classList.add(`product-info`)

    const productInfoDiv = document.createElement(`div`);
    
    const productPrice = document.createElement(`p`);
    productPrice.innerText = `$` + product.price;

    const productName = document.createElement(`p`);
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement(`figure`);
    const productImgCart = document.createElement(`img`);
    productImgCart.setAttribute(`src`, `./icons/bt_add_to_cart.svg`);

    productInfoFigure.appendChild(productImgCart)

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    const cardsContainer = $(`.cards-container`)
    cardsContainer.appendChild(productCard)
}}
renderProducts(productList);