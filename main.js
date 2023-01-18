const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const burguerMenu = document.querySelector(".menu")
const productDetailClose = document.querySelector('.product-detail-close')
const mobileMenu = document.querySelector(".mobile-menu")
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#productDetailVista')


menuEmail.addEventListener('click', toggleDesktopMenu)
burguerMenu.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)
productDetailClose.addEventListener('click', closeProductDetailVista)

function toggleMobileMenu() {
    const isMenuCarritoIcon = aside.classList.contains('inactive')
    const isProductDetailVista = productDetailContainer.classList.contains('inactive')
    if (!isMenuCarritoIcon || isProductDetailVista) {
        aside.classList.add('inactive')
        productDetailContainer.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
};

function toggleDesktopMenu() {
    const isMenuCarritoIcon = aside.classList.contains('inactive')
    const isProductDetailVista = productDetailContainer.classList.contains('inactive')
    if (!isMenuCarritoIcon || !isProductDetailVista) {
        productDetailContainer.classList.add('inactive')
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
};

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    const isProductDetailVista = productDetailContainer.classList.contains('inactive')
    
    if (!isMobileMenuClosed || !isDesktopMenuClosed || !isProductDetailVista) {
        mobileMenu.classList.add('inactive')
        desktopMenu.classList.add('inactive')
        productDetailContainer.classList.add('inactive')
    }
    aside.classList.toggle('inactive')
};

function openProductDetailVista() {
    desktopMenu.classList.add('inactive')
    aside.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')
}
function closeProductDetailVista() {
    productDetailContainer.classList.add('inactive')
}

const productList = [];
productList.push({
    name:'Cargador',
    price:'50',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name:'Pantalla',
    price:'250',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name:'Laptop',
    price:'520',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name:'Camara',
    price:'430',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name:'Mouse',
    price:'30',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
/*<div class="product-card">
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
function renderProducts (array) {
    for (product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
      
        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailVista)
      
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
    };
};
renderProducts(productList)
