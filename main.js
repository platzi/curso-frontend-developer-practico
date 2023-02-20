//varibles// 
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container');

// events
menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside )

// functions
function toggleDesktopMenu(){
   
    const asideClose = shoppingCartContainer.classList.contains('inactive')

    if(!asideClose){
        shoppingCartContainer.classList.add('inactive');
    } 
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const asideClose = shoppingCartContainer.classList.contains('inactive')

    mobileMenu.classList.toggle('inactive');

    if(!asideClose){
        shoppingCartContainer.classList.add('inactive');
    }
    
    closeProductDetailAside();

}

function toggleAside(){
    const mobileMenuClose= mobileMenu.classList.contains('inactive');
    
    shoppingCartContainer.classList.toggle('inactive');
    
    if(!mobileMenuClose){
        mobileMenu.classList.add('inactive');
    }

    const productDetailClosed = productDetailContainer.classList.contains('inactive');
    //shoppingCartContainer.classList.toggle('inactive');
    if(!productDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive')
    
    productDetailContainer.classList.remove('inactive')

}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}

const productList = [];
    productList.push({
        name: 'bici',
        price: 100,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    })
    productList.push({
        name: 'bicicleta',
        price: 110,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    })
    productList.push({
        name: 'bici',
        price: 120,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    })
    productList.push({
        name: 'bici',
        price: 130,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    })

function renderProducts(arr){
    for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside) // open y no toggle por que solo queremos que este abierta

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