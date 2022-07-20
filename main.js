const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIconCart = document.querySelector('.navbar-shopping-cart')
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuIconCart.addEventListener('click', toggleCartshoppingCartContainer);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function toggleDesktopMenu() {

    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
    
    closeProductDetailAside();
    
}

function toggleMobileMenu() {

    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');

    closeProductDetailAside();

}

function toggleCartshoppingCartContainer() {

    const ismobileMenuClosed = mobileMenu.classList.contains('inactive')
    

    if (!ismobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }

    const isProductDetailClose = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClose) {
        productDetailContainer.classList.add('inactive');
    }

    const isDesktopClosed = desktopMenu.classList.contains('inactive');

    if (!isDesktopClosed) {
        desktopMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
    
    closeProductDetailAside();

}

function openProductDetailAside(){

    shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');

    const isDesktopEmailClosed = desktopMenu.classList.contains('inactive');

    if(!isDesktopEmailClosed) {
        desktopMenu.classList.add('inactive');
    }
}

function closeProductDetailAside() {

    productDetailContainer.classList.add('inactive');
    
    
}

const productList = [];

productList.push({
    name: 'Mouse',
    price: 120,
    image: 'https://cdn.pixabay.com/photo/2017/05/24/21/33/workplace-2341642_960_720.jpg'
})

productList.push({
    name: 'Notebook',
    price: 220,
    image: 'https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_960_720.jpg'
})

productList.push({
    name: 'Computer',
    price: 620,
    image: 'https://cdn.pixabay.com/photo/2016/11/19/14/16/man-1839500_960_720.jpg'
})

productList.push({
    name: 'Mouse',
    price: 120,
    image: 'https://cdn.pixabay.com/photo/2017/05/24/21/33/workplace-2341642_960_720.jpg'
})

productList.push({
    name: 'Notebook',
    price: 220,
    image: 'https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_960_720.jpg'
})

productList.push({
    name: 'Computer',
    price: 620,
    image: 'https://cdn.pixabay.com/photo/2016/11/19/14/16/man-1839500_960_720.jpg'
})

productList.push({
    name: 'Mouse',
    price: 120,
    image: 'https://cdn.pixabay.com/photo/2017/05/24/21/33/workplace-2341642_960_720.jpg'
})

productList.push({
    name: 'Notebook',
    price: 220,
    image: 'https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_960_720.jpg'
})

productList.push({
    name: 'Computer',
    price: 620,
    image: 'https://cdn.pixabay.com/photo/2016/11/19/14/16/man-1839500_960_720.jpg'
})

productList.push({
    name: 'Mouse',
    price: 120,
    image: 'https://cdn.pixabay.com/photo/2017/05/24/21/33/workplace-2341642_960_720.jpg'
})

productList.push({
    name: 'Notebook',
    price: 220,
    image: 'https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_960_720.jpg'
})

productList.push({
    name: 'Computer',
    price: 620,
    image: 'https://cdn.pixabay.com/photo/2016/11/19/14/16/man-1839500_960_720.jpg'
})

productList.push({
    name: 'Mouse',
    price: 120,
    image: 'https://cdn.pixabay.com/photo/2017/05/24/21/33/workplace-2341642_960_720.jpg'
})

productList.push({
    name: 'Notebook',
    price: 220,
    image: 'https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_960_720.jpg'
})

productList.push({
    name: 'Computer',
    price: 620,
    image: 'https://cdn.pixabay.com/photo/2016/11/19/14/16/man-1839500_960_720.jpg'
})

productList.push({
    name: 'Mouse',
    price: 120,
    image: 'https://cdn.pixabay.com/photo/2017/05/24/21/33/workplace-2341642_960_720.jpg'
})

productList.push({
    name: 'Notebook',
    price: 220,
    image: 'https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_960_720.jpg'
})

productList.push({
    name: 'Computer',
    price: 620,
    image: 'https://cdn.pixabay.com/photo/2016/11/19/14/16/man-1839500_960_720.jpg'
})

productList.push({
    name: 'Mouse',
    price: 120,
    image: 'https://cdn.pixabay.com/photo/2017/05/24/21/33/workplace-2341642_960_720.jpg'
})

productList.push({
    name: 'Notebook',
    price: 220,
    image: 'https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_960_720.jpg'
})

productList.push({
    name: 'Computer',
    price: 620,
    image: 'https://cdn.pixabay.com/photo/2016/11/19/14/16/man-1839500_960_720.jpg'
})

productList.push({
    name: 'Mouse',
    price: 120,
    image: 'https://cdn.pixabay.com/photo/2017/05/24/21/33/workplace-2341642_960_720.jpg'
})

productList.push({
    name: 'Notebook',
    price: 220,
    image: 'https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_960_720.jpg'
})

productList.push({
    name: 'Computer',
    price: 620,
    image: 'https://cdn.pixabay.com/photo/2016/11/19/14/16/man-1839500_960_720.jpg'
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
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        // Producto = {name, price, image} -> product.image
        productImg.addEventListener('click',openProductDetailAside)
    
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
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg' );
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);