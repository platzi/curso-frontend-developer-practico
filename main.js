const menuNav = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");

const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

/*ProductList*/
const cardsContainer = document.querySelector('.cards-container');

menuNav.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {

    const isCarritoAsideClosed = shoppingCartContainer.classList.contains('inative');

    if(!isCarritoAsideClosed) {
        shoppingCartContainer.classList.add('inative');
    }

    desktopMenu.classList.toggle("inative");
}

function toggleMobileMenu() {
    
    const isCarritoAsideClosed = shoppingCartContainer.classList.contains('inative');

    if(!isCarritoAsideClosed) {
        shoppingCartContainer.classList.add('inative');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle("inative");

}

function toggleCarritoAside() {
    
  const isMobileMenuClosed = mobileMenu.classList.contains('inative');
  
  if(!isMobileMenuClosed)//Si es diferente a cerrado//
 {
    mobileMenu.classList.add('inative');
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inative');
  
  if(!isProductDetailClosed)//Si es diferente a cerrado//
 {
    productDetailContainer.classList.add('inative');
  }

  shoppingCartContainer.classList.toggle('inative');
  
}

function openProductDetailAside() {

    shoppingCartContainer.classList.add('inative');

    productDetailContainer.classList.remove('inative');

}

function closeProductDetailAside() {

    productDetailContainer.classList.add('inative');

}

const productList = [];
productList.push({
    name: 'Bake',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Compu',
    price: 603,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr){

    for (product of arr) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        //product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)
    
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

