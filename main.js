const menuEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const mobileHam= document.querySelector('.menu');
const mobileMenu= document.querySelector('.mobile-menu');
const productDetail = document.querySelector('.product-detail');
const shoppinCart = document.querySelector('.navbar-shopping-cart');
const cardContainer = document.querySelector('.cards-container');
const productDetail2 = document.querySelector('.product-detail2');
const productDetailContainer = document.querySelector('.product-detail2');
const productDetailCloseIcon= document.querySelector('.product-detail-close2');


menuEmail.addEventListener('click',toggleDesktopMenu);
mobileHam.addEventListener('click',toggleMobilepMenu);
shoppinCart.addEventListener('click',toggleCarrito);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function toggleDesktopMenu(){    
    console.log("2");
 var isMenuCarritoOpen= !productDetail.classList.contains('inactive');

 if(isMenuCarritoOpen){
    productDetail.classList.add('inactive');  
     
}
    desktopmenu.classList.toggle('inactive');  
    closeProductDetailAside()
}

function toggleMobilepMenu(){
var isMenuCarritoOpen = !productDetail.classList.contains('inactive');

if (isMenuCarritoOpen){
    productDetail.classList.add('inactive');
    productDetail2.classList.add('inactive');
       
}
    mobileMenu.classList.toggle('inactive');       
    closeProductDetailAside();
}

function toggleCarrito() {
   
    var isMenuMobileOpen=!mobileMenu.classList.contains('inactive');

    if(isMenuMobileOpen){
        mobileMenu.classList.add('inactive');
        closeProductDetailAside();
    }
    productDetail.classList.toggle('inactive');
    closeProductDetailAside();
    desktopmenu.classList.add('inactive'); 
}

 function openProductDetailAside(){
       
   productDetailContainer.classList.remove('inactive');
   mobileMenu.classList.add('inactive');
   productDetail.classList.add('inactive');
   desktopmenu.classList.add('inactive'); 

}

 function closeProductDetailAside(){
     productDetailContainer.classList.add('inactive');
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

function renderProducts(arr){
    for(product of arr){
    const productCard=document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);
    productImg.addEventListener('click',openProductDetailAside);

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
