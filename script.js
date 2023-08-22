const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHanIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener('click', toggleDestokMenu);
menuHanIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDestokMenu(){
    const isMenuCarritoIcon = aside.classList.contains('inactive');
    if (!isMenuCarritoIcon){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive')

}
function toggleMobileMenu(){
    const isMenuCarritoIcon = aside.classList.contains('inactive'); 
    if (!isMenuCarritoIcon){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');

}
function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    const isEmailMenu = desktopMenu.classList.contains('inactive');
    if (!isEmailMenu){
        desktopMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src' , product.image)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');   
    
        const productPrice = document.createElement('p');
        productPrice.innerText ='$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg' )
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productInfoFigure.appendChild(productImgCart);
        
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    
    }
}

renderProducts(productList);
