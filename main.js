const navEmail = document.querySelector(".navbar-email");
const inactive = document.querySelector(".inactive");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const asideProductDetail = document.querySelector(".product-detail");
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu");
const cardsContainer =  document.querySelector('.cards-container');

navEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed = asideProductDetail.classList.contains('inactive');

    if(!isAsideClosed){
        asideProductDetail.classList.add('inactive');
        }

    inactive.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = asideProductDetail.classList.contains('inactive');

    if(!isAsideClosed){
        asideProductDetail.classList.add('inactive');
        }

    mobileMenu.classList.toggle('inactive');


}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

   if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive');
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
        }
   
    asideProductDetail.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bottle',
    price: 50,
    image: 'https://images.pexels.com/photos/786575/pexels-photo-786575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Mouse',
    price: 100,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Keyboard',
    price: 79,
    image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Book',
    price: 30,
    image: 'https://images.pexels.com/photos/3309957/pexels-photo-3309957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'PC',
    price: 300,
    image: 'https://images.pexels.com/photos/2148216/pexels-photo-2148216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Monitor',
    price: 200,
    image: 'https://images.pexels.com/photos/439803/pexels-photo-439803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Window',
    price: 130,
    image: 'https://images.pexels.com/photos/1906795/pexels-photo-1906795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});


function renderProducts(arr){
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$ ' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);


