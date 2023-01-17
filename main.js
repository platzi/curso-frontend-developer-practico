const  menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const  menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const hamburguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click',toggleDesktopMenu);
hamburguerIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleOrderMenu);

function toggleDesktopMenu() {     
    desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu() {     
    mobileMenu.classList.toggle('inactive');  
    
}

function toggleOrderMenu() {     
    const isMobileClosed = mobileMenu.classList.contains('inactive');
    console.log('Esta ingresando');
    if(!isMobileClosed){
        console.log('Esta ingresando 2');
        mobileMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive');  
    
}

const productList = [];

productList.push({
    name:'bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})

productList.push({
    name:'screen',
    price: 200,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})

productList.push({
    name:'Laptop',
    price: 1000,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})

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
*/


for(product of productList){
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')

    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image)
    
    const productInfo = document.createElement('div')
    productInfo.classList.add ('product-info')

    const productInfoDiv = document.createElement('div')

    const productPrice = document.createElement('p')
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p')
    productName.innerText = '$' + product.name;

    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)

    const productInfoFigure = document.createElement('figure')
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')

    productInfoFigure.appendChild(productImgCart)

    productInfo.appendChild(productInfoFigure)
    productInfo.appendChild(productInfoDiv)

    productCard.appendChild(productInfo)
    productCard.appendChild(productImg)

    const cardsContainer = document.querySelector('.cards-container')
    cardsContainer.appendChild(productCard)

}


console.log(productList);



