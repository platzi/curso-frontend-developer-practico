const menuEmail= document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu ');
const menuHamIcon=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');
const menuCarritoIcon=document.querySelector('.navbar-shopping-cart');
const aside=document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')
const productDetail = document.querySelector('#productDetailSec')
const IconcCloseProductDetail = document.querySelector('.product-detail-close-secondary')


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside)
IconcCloseProductDetail.addEventListener('click', closeProductDetail)


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
    productDetail.classList.add('inactive');

}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive')
    productDetail.classList.add('inactive')

}

function toggleCarritoAside(){
    aside.classList.toggle('inactive')
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive')
    productDetail.classList.add('inactive')

}

function openProduct(){
    productDetail.classList.remove('inactive')
    aside.classList.add('inactive')
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

function closeProductDetail(){
    productDetail.classList.add('inactive')

}

const productList= [];
productList.push({
    name:'Bike',
    price:120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productList.push({
    name:'Mouse',
    price:30,
    image: "https://miro.medium.com/max/1200/1*RuOw2gZgl8giWnF5x2AxRw.jpeg",
})

productList.push({
    name:'Freezer',
    price:220,
    image: "https://www.tibo.bo/tiendasbolivia/wp-content/uploads/2021/01/Frezzer_H440_FrontView_Electrolux-1.jpg",
})


/*<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>*/


/* ACA CREAMOS LA ESTRUCTURA HTML CON JS, A CADA CONSTANTE LE ASIGANOMS UNA CLASE SIMILAR A LA QUE HICIMOS EN HTML*/ 
function renderProducts(product){
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click',openProduct)
    
        const productInfo= document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
        productInfoDiv.append(productPrice, productName);
        productInfo.append(productInfoDiv,productInfoFigure);
        productCard.append(productImg,productInfo);
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
