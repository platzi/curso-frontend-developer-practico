const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');





navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
    
}

function toggleMobileMenu(){
    shoppingCartContainer.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
    productDetailContainer.classList.add('inactive')

}

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
menuCarritoIcon.addEventListener('click', toggleCarritoleAside);


function toggleCarritoleAside(){
    mobileMenu.classList.add('inactive')
    shoppingCartContainer.classList.toggle('inactive')
    productDetailContainer.classList.add('inactive')

}

// Mostrar productos y product detail

const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#productDetail')
const productDetailCloseBtn = document.querySelector('.product-detail-close')

productDetailCloseBtn.addEventListener('click',closeProductDetailAside)
const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'TV',
    price: 220,
    img: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=800',
});

productList.push({
    name: 'pc',
    price: 500,
    img: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=800',
});
function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive')
    shoppingCartContainer.classList.add('inactive')

    
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}

function renderProducts(arr){

    for (product of arr){

        const productCard = document.createElement('div');
    
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.img)
        productImg.addEventListener('click',openProductDetailAside)

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$ '+product.price
    
        const productName = document.createElement('p')
        productName.innerText = product.name
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)



