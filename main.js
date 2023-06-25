const menuEmail= document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const menuHamIcon=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const classContainer= document.querySelector(".cards-container");


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoMenu);



function toggleDesktopMenu (){

    const isAsideClose =  aside.classList.contains('inactive')

    if (!isAsideClose){
        aside.classList.add('inactive');
    }  
    desktopMenu.classList.toggle ("inactive");
 
}

function toggleMobileMenu (){

    const isAsideClose =  aside.classList.contains('inactive')

    if (!isAsideClose){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle ("inactive");
}

function toggleCarritoMenu(){
    
    const isMobileMenuClose = mobileMenu.classList.contains ('inactive')
    const isAsideClose =  aside.classList.contains('inactive')

    if (!isAsideClose){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle ('inactive');
    
    if (!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');

}




const productList = [];

productList.push({
name: 'Bike',
price: 120,
image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });

productList.push({
        name: 'Computadora',
        price: 620,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        });

function renderProducts(array){

    for (product of array){

        const productCard =  document.createElement('div');
        productCard.classList.add ('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        const productInfo =  document.createElement('div');
        productInfo.classList.add ('product-info');

        const productInfoDiv =  document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText= '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText= product.name;

        productInfoDiv.append(productPrice, productName);

        const productInfoFigure = document.createElement('figure');

        const productImgCart = document.createElement('img');
        productImgCart.setAttribute ('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.append(productInfoDiv, productInfoFigure);

        productCard.append(productImg,productInfo);

        classContainer.append(productCard);

}

}

renderProducts(productList);




/*   <div class="product-card">
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
