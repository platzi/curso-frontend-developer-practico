const accountMenu = document.querySelector('.navbar-email');
const accountMenuDropdown = document.querySelector('.desktop-menu');
const mobileMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

accountMenu.addEventListener('click', toggleAccountMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleProductDetail);

function toggleAccountMenu() {
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetail.classList.add('inactive')
    }
    accountMenuDropdown.classList.toggle('inactive');
}
function toggleMobileMenu() {
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetail.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleProductDetail() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isAccountMenuClosed = accountMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    if (!isAccountMenuClosed) {
        accountMenuDropdown.classList.add('inactive')
    }
    productDetail.classList.toggle('inactive');
}

/* 

<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="">
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

const productList = [];
function renderProducts(productListArr) {
    for (const product of productListArr) {
        
        // Creting product image
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);
        
        // Creting product info
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoContent = document.createElement('div');
        productInfoContent.classList.add('product-info-content');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price}`;
        const productName = document.createElement('p');
        productName.innerText = `$${product.name}`; 

        productInfoContent.appendChild(productPrice);
        productInfoContent.appendChild(productName);
        productInfo.appendChild(productInfoContent);

        const addToCartFigure = document.createElement('figure');
        const addToCartImg = document.createElement('img');
        addToCartImg.setAttribute('src', './icons/bt_add_to_cart.svg')
        addToCartFigure.appendChild(addToCartImg);
        productInfo.appendChild(addToCartFigure);
        
        // Creting product card
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);
        
        // Getting cards container, append product card
        const cardsContainer = document.querySelector('.cards-container');
        cardsContainer.appendChild(productCard);
    }
}

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

renderProducts(productList)


