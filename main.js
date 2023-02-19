const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const cartProductDetail = document.querySelector('#shoppingCardContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close')

navbarEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleCartProductDetail);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isCartProdDetOpen = !cartProductDetail.classList.contains('inactive')

    /*Close the cart product datail*/
    if(isCartProdDetOpen){
        cartProductDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isCartProdDetOpen = !cartProductDetail.classList.contains('inactive')

    /*Close the cart product datail*/
    if(isCartProdDetOpen){
        cartProductDetail.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCartProductDetail(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

    /*Close any menu*/
    if(isMobileMenuOpen || isDesktopMenuOpen){
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }

    cartProductDetail.classList.toggle('inactive');
}

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];

/*Fill the product list whit examples*/
function CreateProducts(num){
    for(var i = 0; i < num; i++){
        productList.push({
            name: 'bike',
            price: 120,
            image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        });
    }
}

/*Create the products cards*/
function renderProducts(arr){
    for(let product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
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
    
        const productInfoFigure = document.createElement('figure');
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
        productInfoDiv.append(productPrice,productName);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    
    }
}

CreateProducts(10);
renderProducts(productList);