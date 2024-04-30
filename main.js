const emailMenu = document.querySelector('.navbar-email');
const iconMenu = document.querySelector('.menu');
const shoppingCartIconMenu = document.querySelector('.navbar-shopping-cart');
const productDetailCrossIcon = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail')


iconMenu.addEventListener('click', toggleMobileMenu);
emailMenu.addEventListener('click', toggleDesktopMenu);
shoppingCartIconMenu.addEventListener('click', toggleShoppingCartMenu);
productDetailCrossIcon.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailContainerClosed = productDetailContainer.classList.contains('inactive'); 

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    };

    if (!isProductDetailContainerClosed) {
        productDetailContainer.classList.add('inactive');
    };

    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    };

    closeProductDetail()

    mobileMenu.classList.toggle('inactive');
};

function toggleShoppingCartMenu(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailContainerClosed = productDetailContainer.classList.contains('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    };
    
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    };

    if (!isProductDetailContainerClosed) {
        productDetailContainer.classList.add('inactive');
    };

    shoppingCartContainer.classList.toggle('inactive');
};

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetail(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Screen',
    price: 220,
    image: 'https://imgs.search.brave.com/-1efmBu_D6ps90kh1w-4ewkborKRN7JzRmMl54D1OJ8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nY2ZsZWFybmZy/ZWUub3JnL2NvbnRl/bnQvNWNlNTZiZWJj/MDIyMGUyMmMwOGI5/Zjc0XzA1XzIyXzIw/MTkvbW9uaXRvci0w/MV94bC5wbmc'
});
productList.push({
    name: 'Computer',
    price: 320,
    image: 'https://imgs.search.brave.com/yD-fYeai0K__JkCl2AItt5N0HjPlMdkq3oKGeZDuLlg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb21w/dWNvcmRvYmEuY29t/LmFyL2ltZy9QdWJs/aWMvMTA3OC1wcm9k/dWN0by1wYy1yeXpl/bjUtNzYwMGctNDQ2/MS5qcGc'
});


/* iteramos los productos del array de producto y por cada uno maquetamos el Html con el nombre, precio y img*/
function renderProducts(array) {
    for (product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        //product = {name, price, image} --> product.image
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);
        productImage.addEventListener('click', openProductDetailAside)
    
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
        productImgCart.setAttribute('src', '.icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    };
};

renderProducts(productList);