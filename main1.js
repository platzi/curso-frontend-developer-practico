const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const navbarShopping = document.querySelector('.navbar-shopping-cart');
const shoppingDetails = document.querySelector('.product-detail');

const mobileMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const cardsContainer = document.querySelector('.cards-container');

const detailAside = document.querySelector('.product-detail-aside');
const detailClose = document.querySelector('.product-detail-close');

const nameProduct = document.querySelector('.nameProduct');
const priceProduct = document.querySelector('.priceProduct');
const imgProductDetail = document.querySelector('.imgProductDetail');

navbarEmail.addEventListener('click', menuOpenClose);

navbarShopping.addEventListener('click', shoppingDetailsToggle);

mobileMenuIcon.addEventListener('click',mobileMenuToggle);

detailClose.addEventListener('click',toggleDetailClose);



function mobileMenuToggle () {
    const cartIsClose = shoppingDetails.classList.contains('inactive');
    if(!cartIsClose) {
        shoppingDetails.classList.add('inactive');
    }
    const detailClose = detailAside.classList.contains('inactive');
    if(!detailClose){
        detailAside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function shoppingDetailsToggle () {
    const mobileOpen = mobileMenu.classList.contains('inactive');
    if(!mobileOpen){
        mobileMenu.classList.add('inactive');
    }

    const detailClose = detailAside.classList.contains('inactive');
    if(!detailClose){
        detailAside.classList.add('inactive');
    }

    shoppingDetails.classList.toggle('inactive')
}
function menuOpenClose () {
    const detailClose = detailAside.classList.contains('inactive');
    if(!detailClose){
        detailAside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleDetailClose () {
    detailAside.classList.toggle('inactive');
}
function openAside() {
    const cartIsClose = shoppingDetails.classList.contains('inactive');
    if(!cartIsClose){
        shoppingDetails.classList.add('inactive');
    }
    detailAside.classList.remove('inactive');
}


const array = [];
array.push({
        price: 1200,
        name: 'Bike',
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
array.push({
    price: 6000,
    name: 'Televisor',
    image: 'https://cdn.shopify.com/s/files/1/2554/0310/products/LE-32D00_Front_1600x.jpg?v=1660677035'
});
array.push({
    price: 12000,
    name: 'Computador',
    image: 'https://depor.com/resizer/K8H6uBnyBdCIpI_wQgDkbetqU5Y=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/QNY2ULWW7BFFLJ7IKHQCPSA5XI.jpg'
});


array.forEach(function(index){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    cardsContainer.appendChild(productCard);
    
    const image = document.createElement('img');
    image.setAttribute('src',index.image);
    productCard.appendChild(image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    productCard.appendChild(productInfo);
    const productInfoCard = document.createElement('div');
    productInfo.appendChild(productInfoCard);

    const pPrice = document.createElement('p');
    pPrice.innerText = index.price;

    const pName = document.createElement('p');
    pName.innerText = index.name;

    productInfoCard.append(pPrice,pName);

    const productFigure = document.createElement('figure');
    productInfo.appendChild(productFigure);
    const figureImage = document.createElement('img');
    figureImage.setAttribute('src','./icons/bt_add_to_cart.svg');
    figureImage.addEventListener('click',openAside);

    figureImage.addEventListener('click',function(){
        imgProductDetail.setAttribute('src',index.image)
        priceProduct.innerText=index.price;
        nameProduct.innerText=index.name;
    });
    
    productFigure.appendChild(figureImage);
})
    


