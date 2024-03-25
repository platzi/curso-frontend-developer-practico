const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideCar = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('#shoppingCartContainer');
const cardContain = document.querySelector('.cards-container');
const productDetail = document.querySelector('#product-detail');
const shoppingDetailClosed = document.querySelector('.product-detail-close');

navEmail.addEventListener('click',toggleDestopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
asideCar.addEventListener('click',toggleCarAside);
shoppingDetailClosed.addEventListener('click',ClosedCard);

function toggleDestopMenu(){
    productDetail.classList.add('inactive');
    shoppingCart.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    productDetail.classList.add('inactive');
    shoppingCart.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}
function toggleCarAside(){
    productDetail.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    shoppingCart.classList.toggle('inactive');
}
function openProductDetailAside(){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    shoppingCart.classList.add('inactive');
    productDetail.classList.remove('inactive');
}
function ClosedCard(){
    productDetail.classList.add('inactive');
}

const productList =[];
productList.push({
    name:'Bike',
    price:120,
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Bike',
    price:120,
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Bike',
    price:120,
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


    for (product of productList){
        const porductCard = document.createElement('div')
        porductCard.classList.add('product-card')

        const img = document.createElement('img')
        img.setAttribute('src',product.img);
        const porductInfo = document.createElement('div');
        img.addEventListener('click',openProductDetailAside);

        porductInfo.classList.add('product-info');

        const porductInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerHTML='$'+' '+product.price;
        const productName = document.createElement('p');
        productName.innerHTML=product.name;

        porductInfoDiv.appendChild(productName);
        porductInfoDiv.appendChild(productPrice);

        const porductInfoFigure = document.createElement('figure')
        const porductInfoCart = document.createElement('img');
        porductInfoCart.setAttribute('src','./icons/bt_add_to_cart.svg');

        porductInfoFigure.appendChild(porductInfoCart)

        porductInfo.appendChild(porductInfoDiv);
        porductInfo.appendChild(porductInfoFigure);

        porductCard.appendChild(img);
        porductCard.appendChild(porductInfo);
        cardContain.appendChild(porductCard);
    }


