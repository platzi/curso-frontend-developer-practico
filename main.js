const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');

    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');
    }
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');

    desktopMenu.classList.add('inactive');
    aside.classList.add('inactive');
    }
function toggleCarritoAside() {
    aside.classList.toggle('inactive');

    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    }
const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike helmet',
    price: 80,
    image: 'https://imagenes.elpais.com/resizer/MFFNoFmTif0XhClbs5KDLH6uMxc=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/3RV65WETGJDTPBPIFUK6KT35CA.jpg'
});
productList.push({
    name: 'Roller skates',
    price: 100,
    image: 'https://http2.mlstatic.com/D_NQ_NP_811997-MLV52856679481_122022-O.jpg'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike helmet',
    price: 80,
    image: 'https://imagenes.elpais.com/resizer/MFFNoFmTif0XhClbs5KDLH6uMxc=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/3RV65WETGJDTPBPIFUK6KT35CA.jpg'
});
productList.push({
    name: 'Roller skates',
    price: 100,
    image: 'https://http2.mlstatic.com/D_NQ_NP_811997-MLV52856679481_122022-O.jpg'
});

function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
         productCard.classList.add('product-card');
     
     
         const productImg = document.createElement('img');
         productImg.setAttribute('src', product.image);
     
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