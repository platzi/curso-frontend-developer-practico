const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartAside = document.querySelector('.product-detail')
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart')
const cardsContainer = document.querySelector('.cards-container')


menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIcon.addEventListener("click",toggleMobileMenu)
shoppingCartIcon.addEventListener("click",toggleShoppingAside)

function toggleDesktopMenu(){
    const isShoppingCartAside = !shoppingCartAside.classList.contains('inactive')

    if (isShoppingCartAside){
        shoppingCartAside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    const isShoppingCartAside = !shoppingCartAside.classList.contains('inactive')

    if (isShoppingCartAside){
        shoppingCartAside.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}

function toggleShoppingAside(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive')
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive')

    if (isMobileMenuOpen){
        mobileMenu.classList.add('inactive')
    }
    if (isDesktopMenuOpen){
        desktopMenu.classList.add('inactive')
    }

    shoppingCartAside.classList.toggle('inactive')
}

const productList = [];
productList.push({
    name: 'Bike',
    price : 120,
    image : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: 'Pantalla',
    price : 220,
    image : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: 'Laptop',
    price : 660,
    image : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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

function renderProducts(arr){
    for (product of arr){
        console.log(product.price)
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const Productimg = document.createElement('img');
        Productimg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' +  product.price;
        const productName = document.createElement('p');
        productName.innerText =  product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(Productimg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    
    }
}

renderProducts(productList);
