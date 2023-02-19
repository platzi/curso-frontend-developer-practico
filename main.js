const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const cartProductDetail = document.querySelector('#shoppingCardContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

navbarEmail.addEventListener('click', function(){ toggleMenu('desktopMenu') });
iconMenu.addEventListener('click', function(){ toggleMenu('mobileMenu') });
cartIcon.addEventListener('click', function(){ toggleMenu('cartProductDetail') });
productDetailContainer.addEventListener('click', closeProductDetailAside);

function toggleMenu(menu){
    switch(menu){
        case 'desktopMenu':
            desktopMenu.classList.toggle('inactive');
            cartProductDetail.classList.add('inactive');
            productDetailContainer.classList.add('inactive');
            console.log('desktopMenu')
            break;
        
        case 'mobileMenu':
            mobileMenu.classList.toggle('inactive');
            cartProductDetail.classList.add('inactive');
            productDetailContainer.classList.add('inactive');
            console.log('mobileMenu')
            break;

        case 'cartProductDetail':
            cartProductDetail.classList.toggle('inactive');
            mobileMenu.classList.add('inactive');
            desktopMenu.classList.add('inactive');
            productDetailContainer.classList.add('inactive');
            console.log('cartProductDetail')
            break;

        case 'productDetailContainer':
            productDetailContainer.classList.remove('inactive');
            mobileMenu.classList.add('inactive');
            desktopMenu.classList.add('inactive');
            cartProductDetail.classList.add('inactive');
            console.log('productDetailContainer')
            break;

        default:
            console.log('default');
            break;
    }
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
        productImage.addEventListener('click', function(){ toggleMenu('productDetailContainer') });
    
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