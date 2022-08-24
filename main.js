const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container')

navEmail.addEventListener('click', toggleDesktopMenu)
burgerMenuIcon.addEventListener('click', toggleMobileMenu)
shoppingCart.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const asideClosed = shoppingCartContainer.classList.contains('inactive')
    
    if(!asideClosed){
        shoppingCartContainer.classList.add('inactive')   
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const mobileMenuClosed = mobileMenu.classList.contains('inactive')
    
    if(!mobileMenuClosed){
        mobileMenu.classList.add('inactive')   
    }
    shoppingCartContainer.classList.toggle('inactive');
}


const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Portatil',
    price: 1500,
    image:'https://d500.epimg.net/cincodias/imagenes/2021/10/04/smartphones/1633348200_815552_1633348518_noticia_normal.jpg'
})

productList.push({
    name: 'Iphone 12',
    price: 800,
    image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-graphite-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202842000'
})
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
function renderProducts(arr){
    for(product of arr)
    {
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
        productName.innerText = '$' + product.name;

        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)

        const productInfoFigure = document.createElement('figure')
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
