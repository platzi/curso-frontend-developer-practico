const navEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click' , toggleDesktopMenu);
menuHamIcon.addEventListener('click' , toggleMobileMenu);
menuCarritoIcon.addEventListener('click' , toggleCarritoAside);


function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')
    }
    
    DesktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')
    }
    
    mobileMenu.classList.toggle('inactive');

};
function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = DesktopMenu.classList.contains('inactive')
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }else if(!isDesktopMenuClosed){
        DesktopMenu.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive')
    
};

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Tv',
    price: 180,
    image: 'https://images.samsung.com/is/image/samsung/p6pim/co/qn55qn85bakxzl/gallery/co-qled-qn85b-qn55qn85bakxzl-532188131?$650_519_PNG$',
});
productList.push({
    name: 'Celular',
    price: 300,
    image: 'https://itechcolombia.co/wp-content/uploads/2022/10/261987_ys8mqf.png',
});
productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://exitocol.vtexassets.com/arquivos/ids/15994985/COMPUTADOR-PORTATIL-HP-AMD-Ryzen-3-5500U-12-GB-256-GB-SSD-15-ef2504la-3249875_a.jpg?v=638072554528430000',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Tv',
    price: 180,
    image: 'https://images.samsung.com/is/image/samsung/p6pim/co/qn55qn85bakxzl/gallery/co-qled-qn85b-qn55qn85bakxzl-532188131?$650_519_PNG$',
});
productList.push({
    name: 'Celular',
    price: 300,
    image: 'https://itechcolombia.co/wp-content/uploads/2022/10/261987_ys8mqf.png',
});
productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://exitocol.vtexassets.com/arquivos/ids/15994985/COMPUTADOR-PORTATIL-HP-AMD-Ryzen-3-5500U-12-GB-256-GB-SSD-15-ef2504la-3249875_a.jpg?v=638072554528430000',
});

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const ProductImg = document.createElement('img');
        ProductImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productInfoPrice = document.createElement('p');
        productInfoPrice.innerText = '$' + product.price;
        const productInfoName = document.createElement('p');
        productInfoName.innerText = product.name;
    
        productInfoDiv.appendChild(productInfoPrice);
        productInfoDiv.appendChild(productInfoName);
    
        const productInfoFigure = document.createElement('figure');
        
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src' , './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(ProductImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard)
    } 
}  
renderProducts(productList);