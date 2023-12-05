const menuEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const mobileHam= document.querySelector('.menu');
const mobileMenu= document.querySelector('.mobile-menu');
const productDetail = document.querySelector('.product-detail');
const shoppinCart = document.querySelector('.navbar-shopping-cart');
const cardContainer = document.querySelector('.cards-container');
const productDetail2 = document.querySelector('.product-detail2');


menuEmail.addEventListener('click',toggleDesktopMenu);
mobileHam.addEventListener('click',toggleMobilepMenu);
shoppinCart.addEventListener('click',toggleCarrito);

function toggleDesktopMenu(){    
 var isMenuCarritoOpen= !productDetail.classList.contains('inactive');

 if(isMenuCarritoOpen){
    productDetail.classList.add('inactive');
}

    desktopmenu.classList.toggle('inactive');   
}

function toggleMobilepMenu(){
var isMenuCarritoOpen = !productDetail.classList.contains('inactive');

if (isMenuCarritoOpen){
    productDetail.classList.add('inactive');
}
    mobileMenu.classList.toggle('inactive');   
}

function toggleCarrito() {
    var isMenuMobileOpen=!mobileMenu.classList.contains('inactive');

    if(isMenuMobileOpen){
        mobileMenu.classList.add('inactive');
    }
    productDetail.classList.toggle('inactive')
}



const productList = [];
productList.push({
    name:'Bike',
    price: 1200,
    image:  'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name:'Bisturi',
    price: 100,
    image:  'https://herramientasdee.com/wp-content/uploads/2023/06/bisturi.png'
});

productList.push({
    name:'Tijeras',
    price: 700,
    image:  'https://herramientasdee.com/wp-content/uploads/2019/01/tijeras-para-cortar-materiales.jpg'
});

productList.push({
    name:'Cepilladora',
    price: 19200,
    image:  'https://herramientasdee.com/wp-content/uploads/2019/01/cepilladora-para-alizar-y-cortar-madera.jpg'
});
productList.push({
    name:'Bike',
    price: 1200,
    image:  'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name:'Bisturi',
    price: 100,
    image:  'https://herramientasdee.com/wp-content/uploads/2023/06/bisturi.png'
});

productList.push({
    name:'Tijeras',
    price: 700,
    image:  'https://herramientasdee.com/wp-content/uploads/2019/01/tijeras-para-cortar-materiales.jpg'
});

productList.push({
    name:'Cepilladora',
    price: 19200,
    image:  'https://herramientasdee.com/wp-content/uploads/2019/01/cepilladora-para-alizar-y-cortar-madera.jpg'
});



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
</div>     */

function renderProducts(arr){
    for(product of arr){
    const productCard=document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);

    const productInfo= document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText= '$' + product.price;

    productName= document.createElement('p');
    productName.innerText = product.name;

    const productInfoFigure= document.createElement('figure');
    const productImgCart = document.createElement ('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild (productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productInfoDiv.appendChild(productName);
    productInfoDiv.appendChild(productPrice);


    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardContainer.appendChild(productCard);
}
}

renderProducts(productList);