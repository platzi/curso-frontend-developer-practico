const menuEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const ProductDetailCloseIcon = document.querySelector('.product-detail-close');


const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shopingCartDetail = document.querySelector('#shopingCartDetail');
const cardsContainer = document.querySelector('.cards-container');
const ProductDetailContainer = document.querySelector('#productDetail');




menuEmail.addEventListener('click',toggleDekstopMenu);
menuIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleshopingCartDetail);
ProductDetailCloseIcon.addEventListener('click',closeProductDetailAside);


function toggleDekstopMenu(){
    const isAsideCLosed = isMobileMenuCLosed = shopingCartDetail.classList.contains('inactive');
    if(!isAsideCLosed){
        shopingCartDetail.classList.add('inactive');
    }

    desktopmenu.classList.toggle ('inactive');
    closeProductDetailAside();
}


function toggleMobileMenu(){
    const isAsideCLosed = isMobileMenuCLosed = shopingCartDetail.classList.contains('inactive');
    if(!isAsideCLosed){
        shopingCartDetail.classList.add('inactive');
    }
    closeProductDetailAside();
    mobileMenu.classList.toggle ('inactive');

}
function toggleshopingCartDetail(){

    const isMobileMenuCLosed = mobileMenu.classList.contains('inactive');


    if(!isMobileMenuCLosed){
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = ProductDetailContainer.classList.contains('inactive');


    if(!isProductDetailClosed){
        ProductDetailContainer.classList.add('inactive');
    }




    shopingCartDetail.classList.toggle ('inactive');
}
function openProductDetailAside(){
    
    shopingCartDetail.classList.add('inactive');

    ProductDetailContainer.classList.remove('inactive')
}
function closeProductDetailAside(){
    ProductDetailContainer.classList.add('inactive');
}


const productList = [];

productList.push({
    name: 'Specialized Rockhopper',
    price: 1.74020,
    image: 'https://www.alkosto.com/medias/7707118743876-001-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w0MjE0MTl8aW1hZ2UvanBlZ3xoMGYvaGIyLzEzNDE5NzYyMzUyMTU4Lzc3MDcxMTg3NDM4NzZfMDAxXzE0MDBXeDE0MDBIfGYwN2Y4YTM4OThhMjRjMDg4ZGQ2YTc4MmJhZjQ0NzlhMjQxYzA4MmExNThlYzlkZWUxMDAwMzE2MjI1NzlkYjM',

});

productList.push({
    name: 'Specialized Rockhopper clara',
    price: 1.740002,
    image: 'https://assets.specialized.com/i/specialized/91822-76_ROCKHOPPER-29-TARBLK-WHT_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',

});

productList.push({
    name: 'Bicicleta de montaña mtb ',
    price: 2.226001,
    image: 'https://contents.mediadecathlon.com/p2208606/k$8594012fbb445761be99c5d057410ded/bicicleta-de-montana-mtb-rockrider-st-100-negro.jpg?&f=800x800',

});

productList.push({
    name: 'Bicicleta de montaña raleigh',
    price: 1.599005,
    image: 'https://falabella.scene7.com/is/image/FalabellaCO/12206337_1?wid=800&hei=800&qlt=70',

});
productList.push({
    name: 'Bicicleta De Montaña Mountain Gear',
    price: 2.129005,
    image: 'https://i.linio.com/p/990d274108fcd416025f98303bd315f0-product.webp',

});
productList.push({
    name: 'Bicicleta de montaña Hawk Mountain',
    price: 3.199005,
    image: 'https://falabella.scene7.com/is/image/FalabellaCO/12069671_1?wid=800&hei=800&qlt=70',

});
productList.push({
    name: 'Bicicleta De Montaña Mountain Gear Raven',
    price: 1.099005,
    image: 'https://falabella.scene7.com/is/image/FalabellaCO/7590940_1?wid=800&hei=800&qlt=70',

});
productList.push({
    name: 'Bicicleta de Montaña GW',
    price: 5.099005,
    image: 'https://falabella.scene7.com/is/image/FalabellaCO/3922919_1?wid=800&hei=800&qlt=70',

});
/* <div class="product-card">
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
</div> */

// for (product of productList){
//     const htmlCards = `div class="product-card">
//     <img src=${product.image} class "product-img">
//     <div class="product-info">
//       <div>
//         <p>$${product.price}</p>
//         <p>${product.name}</p>
//       </div>
//       <figure>
//         <img src="./icons/bt_add_to_cart.svg" alt="">
//       </figure>
//     </div>
//     </div>`
//     cardsContainer.innerHTML += htmlCards;
// }


function renderProducts(arr){
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click',openProductDetailAside)
        
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
        const productInfoImg = document.createElement('img');
        productInfoImg.setAttribute('src', './icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productInfoImg);
        
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);
        
        
        }
}
renderProducts(productList);

