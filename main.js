const menuEmail = document.querySelector(".navbar-email");
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const productCloseDetailContainer = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobilepMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailContainer.addEventListener("click", closeProductDetailAside)

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.toggle('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobilepMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailContainer = productDetailContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.toggle('inactive');
    }
    if (!isProductDetailContainer) {
        mobileMenu.classList.toggle('hover');
    }

    mobileMenu.classList.toggle('inactive');

}

function toggleCarritoAside(){
    const isMobileMenuClosed =  mobileMenu.classList.contains('inactive');
    const isDesktopMenu = desktopMenu.classList.contains('inactive');
    const isProductDetailContainer = productDetailContainer.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.toggle('inactive');
    }
    if (!isDesktopMenu) {
        desktopMenu.classList.toggle('inactive');
    }
    if (!isProductDetailContainer) {
        productDetailContainer.classList.toggle('inactive');
    }
    
    shoppingCartContainer.classList.toggle('inactive');
}

function oppenProductDetailAside (){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isMobileMenuClosed =  mobileMenu.classList.contains('inactive');
    const isDesktopMenu = desktopMenu.classList.contains('hover');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.toggle('inactive');
    }
    if (!isMobileMenuClosed) {
        mobileMenu.classList.toggle('inactive');
    }

    if (!isDesktopMenu) {
        desktopMenu.classList.add('hover');
    }

    productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside (){
    const isDesktopMenu = desktopMenu.classList.contains('hover');

    if (!isDesktopMenu) {
        desktopMenu.classList.remove('hover');
    }

    productDetailContainer.classList.add("inactive");

}
 
const productsList = [];
productsList.push({
    name: "Bike",
    price: 120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productsList.push({
    name: "Pantalla",
    price: 200,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productsList.push({
    name: "Computer",
    price: 300,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})


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
    </div> */

    for (product of productsList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
      
        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener("click", oppenProductDetailAside)
      
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