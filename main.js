const navEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCart = document.querySelector(".navbar-shopping-cart")
const productDetail = document.querySelector(".product-detail")
const cardsContainer=document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu)
menu.addEventListener('click', toggleMobileMenu)
shoppingCart.addEventListener('click', toggleShoppingCart)

function toggleDesktopMenu() {
    const isProductDetailClosed = productDetail.classList.contains('inactive')
    if (!isProductDetailClosed) {
        productDetail.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isProductDetailClosed = productDetail.classList.contains('inactive')
    if (!isProductDetailClosed) {
        productDetail.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}
function toggleShoppingCart() {
    const isDesktopClosed = desktopMenu.classList.contains('inactive')
    if (!isDesktopClosed) {
        desktopMenu.classList.add('inactive')
    }

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    productDetail.classList.toggle('inactive')
}

// <div class="product-card">
// <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
// <div class="product-info">
//   <div>
//     <p>$120,00</p>
//     <p>Bike</p>
//   </div>
//   <figure>
//     <img src="./icons/bt_add_to_cart.svg" alt="">
//   </figure>
// </div>
// </div>

const productList = []

productList.push({
    name: "Bike",
    price: 200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Bike",
    price: 200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Bike",
    price: 200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);
