const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');
const menuCarrito=document.querySelector('.navbar-shopping-cart');
const menuhamIcon=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');
const aside=document.querySelector('.product-detail');
const carsContainer=document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuhamIcon.addEventListener('click',toggleMovileMenu);
menuCarrito.addEventListener('click',toggleCarritoAside);


function toggleDesktopMenu(){

    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive')
}




function toggleMovileMenu(){

    const isAsideClosed= aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}



function toggleCarritoAside(){

    const ismobileMenuClosed= mobileMenu.classList.contains('inactive');

    if(!ismobileMenuClosed){
        mobileMenu.classList.toggle('inactive');
    }
    aside.classList.toggle('inactive');

}

const productList=[];

productList.push({
    name:'bike',
    price:120,
    imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name:'celular',
    price:500,
    imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name:'camara',
    price:780,
    imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name:'bike',
    price:120,
    imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name:'celular',
    price:500,
    imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name:'camara',
    price:780,
    imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'bike',
    price:120,
    imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name:'celular',
    price:500,
    imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name:'camara',
    price:780,
    imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
/*
<div class="product-card">
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
</div>
*/

function renderProducts(arr){
    for(product of arr){
        const productCard= document.createElement('div');
        productCard.classList.add('product-card');
     
        // product ={price, name, img}
     
        const productImg=document.createElement('img');
        productImg.setAttribute('src',product.imagen);
     
        const productInfo= document.createElement('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv=document.createElement('div');
     
     
        const productPrice=document.createElement('p');
        productPrice.innerText='$' + product.price;
        const productName=document.createElement('p');
        productName.innerText='$' + product.name;
     
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
     
        const producInfoFigure= document.createElement('figure');
        const producImgCart= document.createElement('img');
        producImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
     
        producInfoFigure.appendChild(producImgCart);
     
     
         productInfo.appendChild(productInfoDiv);
         productInfo.appendChild(producInfoFigure);
     
         productCard.appendChild(productImg);
         productCard.appendChild(productInfo);
     
         carsContainer.appendChild(productCard);
     }
}

renderProducts(productList);