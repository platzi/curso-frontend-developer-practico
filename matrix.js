const navEmail = document.querySelector('.navbar-email')
const navMenuEmail = document.querySelector('.desktop-menu')
const menuBurger = document.querySelector('.menu-burger')
const mobileMenu = document.querySelector('.mobile-menu')
const carritoDesktopLogo = document.querySelector('.navbar-shopping-cart')
const carritoDesktopList = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')
const productList = [];


navEmail.addEventListener('click', toggleMenuVar)
menuBurger.addEventListener('click', toggleMobileMenu)
carritoDesktopLogo.addEventListener('click', toggleCarritoCompras)

function toggleMenuVar() {
    if (!carritoDesktopList.classList.contains('inactive')) {
        carritoDesktopList.classList.toggle('inactive');
    }
    
    navMenuEmail.classList.toggle('inactive');
}
function toggleMobileMenu() {
    if (!carritoDesktopList.classList.contains('inactive')) {
        carritoDesktopList.classList.toggle('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoCompras() {
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.toggle('inactive');
    }

    carritoDesktopList.classList.toggle('inactive');
}

productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Cup',
    price: 10,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'TV',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'TV 30',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'TV 2',
    price: 221,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'PC gamer',
    price: 2120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function crearElementos(array) {
    for (product of array){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
     
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
     
        const productInfoDiv = document.createElement('div')
        productInfoDiv.classList.add('product-info')
     
        const productInfo = document.createElement('div')
     
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
     
        const productName = document.createElement('p')
        productName.innerText = product.name
     
        const productFigure = document.createElement('figure')
     
        const productImgCard = document.createElement('img')
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')
     
      // ahora metemos cada elemento con su elemento padre  
     
      productFigure.appendChild(productImgCard);
     
      productInfo.appendChild(productPrice);
      productInfo.appendChild(productName);
     
      productInfoDiv.appendChild(productInfo)
      productInfoDiv.appendChild(productFigure)
     
      productCard.appendChild(productImg)
      productCard.appendChild(productInfoDiv)
      
      cardsContainer.appendChild(productCard)
     }
     
}

crearElementos(productList)
