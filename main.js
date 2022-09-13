const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon= document.querySelector('.menu-ham-icon')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCart= document.querySelector('.navbar-shopping-cart')
const productDetailAside= document.querySelector('.product-detail-aside')
const cardsContainer = document.querySelector('.cards-container')


menuEmail.addEventListener('click', toogleDesktopMenu)
menuHamIcon.addEventListener('click', toogleMobileMenu)
shoppingCart.addEventListener('click', toogleCarritoAsside)


function toogleDesktopMenu() {
    const productDetailClosed = productDetailAside.classList.contains('inactive')
    
    if(!productDetailClosed){
        productDetailAside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}

function toogleMobileMenu() {
    const productDetailClosed = productDetailAside.classList.contains('inactive')
    
    if(!productDetailClosed){
        productDetailAside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}

function toogleCarritoAsside() {
    const mobileMenuClosed = mobileMenu.classList.contains('inactive');
    const desktopMenuClosed = desktopMenu.classList.contains('inactive');


    if(!mobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    if(!desktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }

    productDetailAside.classList.toggle('inactive')

}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Pantalla',
    price: 60,
    img: 'https://images.pexels.com/photos/5380792/pexels-photo-5380792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'Computador',
    price: 520,
    img: 'https://images.pexels.com/photos/7117946/pexels-photo-7117946.jpeg?auto=compress&cs=tinysrgb&w=600'
})

function renderProducts(arr){
        for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info-aside');

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