// vamos a funcionar los distintos elementos

const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const shoppingCart = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");

const cardsContainer = document.querySelector(".cards-container");

const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

navEmail.addEventListener("click",toggleDesktopMenu);
menuIcon.addEventListener("click",toggleMobileMenu);
shoppingCart.addEventListener("click",toggleProductDetail);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

//enable & disable desktop menu while also desibling the other menus
function toggleDesktopMenu() {
    console.log("click");
    desktopMenu.classList.toggle("inactive");
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.add('inactive')
}

//enable & disable mobile menu while also desibling the other menus
function toggleMobileMenu() {0
    console.log("click");
    mobileMenu.classList.toggle("inactive");
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.add('inactive')
}

//enable & disable product detail while also desibling the other menus
function toggleProductDetail() {
    console.log("click");
    shoppingCartContainer.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDetailContainer.classList.add('inactive')
}

//opens and close the product detail with a click
function openProductDetailaside() {
    console.log("click");
    productDetailContainer.classList.toggle('inactive')
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    shoppingCartContainer.classList.add("inactive");
}

console.log("JS funcionando");

//closes the product detail with a click
function closeProductDetailAside() {
    console.log("click");
    productDetailContainer.classList.add('inactive')
}

console.log("JS funcionando");


// allows the input of new products and its characteristics

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: 'Patalla',
    price: 220,
    image: "https://p1.pxfuel.com/preview/104/721/245/vintage-tv-tv-old-transistor.jpg",
});

productList.push({
    name: 'Computadora',
    price: 300,
    image: "https://p0.pxfuel.com/preview/461/248/853/laptop-computer-browser-business.jpg",
});

/*
for (product of productList) {
    console.log(product.name);
}

for (product in productList) {
    console.log(product);
}
*/

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
</div>
*/

function renderProducts(arr) {

    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product ={name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click',openProductDetailaside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price + '.00';
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }

}

// de esta forma podemos llamar los productos al apretar un botón en el html
renderProducts(productList);

